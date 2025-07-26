import { FC } from 'react';
import CryptoIcon from './CryptoIcon';
import { useIsMobile } from '@/hooks/useMobile';

export interface DepositNotificationProps {
  className?: string;
  symbol?: string;
  hash?: string;
  amount?: string;
  fadeType?: 'full' | 'partial' | 'none';
}

const DepositNotification: FC<DepositNotificationProps> = ({
  className = '',
  symbol = 'eth',
  hash,
  amount,
  fadeType = 'none',
}) => {
  const screen1 = useIsMobile(1200);
  const screen2 = useIsMobile(1439);
  const containerClasses = `text-[10px] md:text-[0.7vw] gap-1.5 flex items-center ${className} ${fadeType === 'full' ? 'opacity-40' : ''
    }`;

  return (
    <span className={containerClasses}>
      <CryptoIcon symbol={symbol} size={screen1 ? 20 : screen2 ? 30 : 20} />
      <div className="flex-1">
        {fadeType === 'partial' ? (
          <span className="block sm:text-xs xss:text-[1.5vw] lp:text-[0.6vw] w-full truncate text-gradient-ellipsis">{hash}</span>
        ) : (
          <span className="block sm:text-xs xss:text-[1.5vw] lp:text-[0.6vw] truncate">{hash}</span>
        )}
      </div>
      <span className="whitespace-nowrap sm:text-xs xss:text-[1.5vw] lp:text-[0.6vw]">+ ${amount}</span>
    </span>
  );
};

export default DepositNotification; 
