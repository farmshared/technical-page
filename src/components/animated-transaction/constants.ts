// Animation timing constants (moved from commons.ts)
export const ANIMATION_DURATION = 52330; // ms – 1570 frames at 30fps
export const TRANSACTION_DISPLAY_START = 23500; // ms – transactions start at frame 705
export const LAST_TRANSACTION_DELAY = 2000;
export const NOTIFICATIONS_LIST_DELAY = 2500;
export const PROFIT_PERCENT_START_TIME = 500;
export const LAST_DEPOSIT_NOTIFICATION_START_TIME = LAST_TRANSACTION_DELAY;
export const DEPOSIT_NOTIFICATIONS_START_TIME = NOTIFICATIONS_LIST_DELAY;

// Crypto-icons sprite constants (moved from crypto-icons.ts)
export const CRYPTO_ICON_SPRITE_PATH = '/icons/blockchains.png';
export const CRYPTO_ICON_HEIGHT = 32;
export const CRYPTO_ICON_PITCH_Y = 53;
export const CRYPTO_ICON_VERTICAL_OFFSET = 3;

export const CRYPTO_ICON_MAP: Record<string, number> = {
  sol: 0,
  btc: 1,
  xrp: 2,
  bnb: 4,
  bsc: 4,
  eth: 7,
  ada: 8,
  usdt: 12,
};

export const SYMBOL_MAP: Record<string, string> = {
  bitcoin: 'btc',
  solana: 'sol',
  'xrp-xrp': 'xrp',
  binancecoin: 'bnb',
  ethereum: 'eth',
  cardano: 'ada',
  tether: 'usdt',
}; 