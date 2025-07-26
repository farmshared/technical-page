import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import animationData from '@/constants/animated-transaction.json';
import animationDataTablet from '@/constants/animated-transaction-tablet.json';
import animationDataMobile from '@/constants/animated-transaction-mobile.json';
import { useRef, useEffect, type FC } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProcentAnimation, { ProcentAnimationHandles } from "./ProcentAnimation";
import { useDepositNotifications } from "./useDepositNotifications";
import Jdenticon from 'react-jdenticon';
import DepositNotification from './DepositNotification';
import type { DepositNotificationData } from './types';
import { getDisplayValue } from './utils';
import { useBreakpoint } from '@/hooks/useBreakpoint.ts';

const fadeBubbleVariant = {
  hidden: {
    opacity: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: 'easeIn' },
  },
};

const listItemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export const AnimatedTransaction: FC = () => {
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);
  const procentAnimationRef = useRef<ProcentAnimationHandles>(null);
  const { depositNotifications, lastDepositNotification } = useDepositNotifications(lottieRef, procentAnimationRef);
  const breakpoints = {
    mobile: { width: 550, gradientWidth: 100 },
    tablet: { width: 1439, gradientWidth: 200 },
    desktop: { width: 1440, gradientWidth: 300 },
  };
  const lol = useBreakpoint(breakpoints)

  const generateUniqueKey = (item: DepositNotificationData, index: number) => {
    const keyBase = item.txHash || item.address;
    return `${keyBase}-${index}`;
  };

  const notificationCounter = useRef(0);
  useEffect(() => {
    if (lastDepositNotification) notificationCounter.current += 1;
  }, [lastDepositNotification]);

  const lastNotificationKey = `${lastDepositNotification?.txHash ?? 'no'}-${notificationCounter.current}`;

  const lastDisplayValue = lastDepositNotification ? getDisplayValue(lastDepositNotification) : '';
  const getAnimationData = (lol: number | undefined) => {
    if (lol === 300) return animationData;
    if (lol === 200) return animationDataTablet;
    return animationDataMobile;
  };
  return (
    <div className="relative">
      <Lottie lottieRef={lottieRef} animationData={getAnimationData(lol ? lol : 300)} loop={false} autoplay={false} />
      <ProcentAnimation ref={procentAnimationRef} />

      {/* Last deposit bubble */}
      <AnimatePresence mode="wait">
        <motion.div
          key={lastNotificationKey}
          variants={fadeBubbleVariant}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={lol === 300 ? "bg-gray-800 text-white px-2 py-2 rounded-full absolute w-[8vw] right-[21.2%] lp:bottom-[24.5%] 2xl:bottom-[25%] 5xl:bottom-[25.7%] 6xl:bottom-[26%]" : lol === 200 ? "bg-gray-800 text-white px-2 py-1 rounded-full absolute w-[9vw] right-[27.5%] xss:bottom-[45%] md:bottom-[45.5%] lg:bottom-[46.6%] xl:bottom-[47%]" : "bg-gray-800 text-white px-2 py-2 rounded-full absolute w-[42vw] right-[29%] sm:bottom-[22.6%] xsm:bottom-[23%] 2sm:bottom-[23%] xs:bottom-[23.2%] xs:right-[28%]"}
        >
          {lastDepositNotification && (
            <div className="text-[0.7vw] gap-1 flex items-center text-gradient-ellipsis">
              <Jdenticon value={lastDisplayValue} size={lol === 300 ? "20" : lol === 200 ? "15" : "20"} />
              <span className="flex-1 text-[3vw] xss:text-[0.7vw]">{lastDisplayValue}</span>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Deposits list */}
      <AnimatePresence initial={false}>
        <div className={
          lol === 300 ? "absolute w-[11vw] h-[10vw] grid content-start gap-[6px] right-[10.3%] bottom-[42.5%] overflow-hidden" : lol === 200 ? "absolute w-[30vw] h-[19vw] grid content-start gap-[6px] right-[16%] bottom-[8.5%] overflow-hidden" : "absolute w-[88vw] h-[52vw] grid content-start gap-[6px] right-[6%] bottom-[8%] overflow-hidden"
        }>
          {depositNotifications.map((depositNotification, index) => (
            <motion.div
              key={generateUniqueKey(depositNotification, index)}
              variants={listItemVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
              layout
              className="relative z-0  p-[1px] transition-all cursor-pointer duration-300 hover:bg-[radial-gradient(109.33%_196.79%_at_-16.9%_5%,_#E984FB_0%,_#5C2267_40.65%,_#0D0D0F_100%)] rounded-[1.25rem]"
            >
              <div className="bg-[#000] px-2 py-1 rounded-[1.25rem] item-transaction-animation">
                <DepositNotification
                  symbol={depositNotification.icon}
                  hash={getDisplayValue(depositNotification)}
                  amount={depositNotification.amountUSD}
                  fadeType={
                    depositNotifications.length >= 5
                      ? index === 0
                        ? 'full'
                        : 'partial'
                      : 'none'
                  }
                />
              </div>


            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </div>
  );
};
