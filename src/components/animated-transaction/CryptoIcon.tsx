import { FC } from 'react';
import {
  CRYPTO_ICON_HEIGHT,
  CRYPTO_ICON_MAP,
  CRYPTO_ICON_PITCH_Y,
  CRYPTO_ICON_SPRITE_PATH,
  CRYPTO_ICON_VERTICAL_OFFSET,
} from './constants';

export interface CryptoIconProps {
  symbol: string;
  size: number;
}

const CryptoIcon: FC<CryptoIconProps> = ({ symbol, size }) => {
  const iconIndex = CRYPTO_ICON_MAP[symbol] ?? CRYPTO_ICON_MAP['eth'];
  const scale = size / CRYPTO_ICON_HEIGHT;
  const yPos = (-iconIndex * CRYPTO_ICON_PITCH_Y + CRYPTO_ICON_VERTICAL_OFFSET) * scale;

  const style = {
    width: `${size}px`,
    height: `${size + 1.5}px`,
    backgroundImage: `url(${CRYPTO_ICON_SPRITE_PATH})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: `${size}px auto`,
    backgroundPosition: `center ${yPos}px`,
  } as const;

  return <div style={style} />;
};

export default CryptoIcon; 