import { useEffect, useRef, useState } from 'react';
import { createClient } from 'graphql-ws';
import { LottieRefCurrentProps } from 'lottie-react';
import { TRANSACTION_DISPLAY_START, ANIMATION_DURATION } from './constants';
import { ProcentAnimationHandles } from './ProcentAnimation';
import { DepositNotificationData } from './types';

interface UseDepositNotificationsReturn {
  depositNotifications: DepositNotificationData[];
  lastDepositNotification?: DepositNotificationData;
}

export const useDepositNotifications = (
  lottieRef: React.RefObject<LottieRefCurrentProps>,
  procentAnimationRef: React.RefObject<ProcentAnimationHandles>,
): UseDepositNotificationsReturn => {
  const [depositNotifications, setDepositNotifications] = useState<DepositNotificationData[]>([]);
  const [lastDepositNotification, setLastDepositNotification] = useState<DepositNotificationData>();

  const bufferRef = useRef<DepositNotificationData[]>([]);
  const isAnimationRunning = useRef(false);
  const uiTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const finishTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Cold start: ignore initial burst to avoid animating historic data
  const isColdStart = useRef(true);
  const coldStartTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const animationItem = lottieRef.current?.animationItem;
    const handleComplete = () => {
      isAnimationRunning.current = false;
    };

    if (animationItem) {
      animationItem.addEventListener('complete', handleComplete);
    }

    lottieRef.current?.stop();

    const processQueue = () => {
      if (isAnimationRunning.current || !bufferRef.current.length) return;
      if (uiTimerRef.current) clearTimeout(uiTimerRef.current);
      const tx = bufferRef.current.shift()!;
      isAnimationRunning.current = true;
      lottieRef.current?.stop();
      lottieRef.current?.play();
      uiTimerRef.current = setTimeout(() => {
        setLastDepositNotification(tx);
        setDepositNotifications((prev) => [...prev, tx].slice(-5));
        procentAnimationRef.current?.startAnimation();
      }, TRANSACTION_DISPLAY_START);

      // stop Lottie halfway through as fallback
      finishTimerRef.current = setTimeout(() => {
        lottieRef.current?.stop();
        isAnimationRunning.current = false;
      }, ANIMATION_DURATION / 2);
    };

    const queueInterval = setInterval(processQueue, 1000);

    const client = createClient({
      url: 'wss://bucs.lqgtest.com/graphql',
      lazy: true,
      retryAttempts: Infinity,
      shouldRetry: () => true,
      retryWait: async (tries) => {
        await new Promise((res) => setTimeout(res, Math.min(5000, 1000 * 2 ** (tries - 1))));
      },
    });

    const SUBSCRIPTION_QUERY = `subscription DepositNotifications {\n  depositNotification {\n    icon\n    address\n    amountUSD\n    txHash\n  }\n}`;

    let shownCount = 0;
    let disposeSubscription: (() => void) | null = null;

    const handleMessage = ({ data }: { data: { depositNotification: DepositNotificationData } }) => {
      const notification = data?.depositNotification;
      if (!notification) return;

      if (isColdStart.current) {
        // reset cold start timer (2s idle)
        clearTimeout(coldStartTimerRef.current!);
        coldStartTimerRef.current = setTimeout(() => {
          isColdStart.current = false;
        }, 2000);

        // update static list without triggering animation
        setDepositNotifications((prev) => [...prev, notification].slice(-5));
        setLastDepositNotification(notification);
        shownCount = Math.min(shownCount + 1, 5);
        return;
      }

      if (shownCount < 5) {
        setDepositNotifications((prev) => [...prev, notification]);
        setLastDepositNotification(notification);
        shownCount++;
      } else {
        bufferRef.current.push(notification);
      }
    };

    const startSubscription = () => {
      disposeSubscription = client.subscribe(
        { query: SUBSCRIPTION_QUERY },
        {
          next: handleMessage,
          error: (err) => {
            console.error('Subscription error', err);
          },
          complete: () => {
            console.warn('Subscription completed');
            // rely on graphql-ws client's built-in retry mechanism instead of manual resubscribe
          },
        },
      );
    };

    startSubscription();

    return () => {
      if (coldStartTimerRef.current) clearTimeout(coldStartTimerRef.current);
  
      if (animationItem) {
        try {
          animationItem.removeEventListener('complete', handleComplete);
        } catch (error) {
          console.warn('Ошибка при удалении слушателя события:', error);
        }
      }
      
      clearInterval(queueInterval);
      if (uiTimerRef.current) clearTimeout(uiTimerRef.current);
      if (finishTimerRef.current) clearTimeout(finishTimerRef.current);
      if (disposeSubscription) disposeSubscription();
      client.dispose();
    };
  }, [lottieRef, procentAnimationRef]);

  return { depositNotifications, lastDepositNotification };
}; 