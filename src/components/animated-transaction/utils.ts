import { DepositNotificationData } from './types';

// Returns the preferred string to show in UI for given deposit notification
export const getDisplayValue = (item: DepositNotificationData): string => {
  const { txHash, address, icon } = item;
  if (txHash && txHash.toLowerCase() !== 'unknown') {
    return txHash;
  }
  if (address && address.toLowerCase() !== 'unknown') {
    return address;
  }
  // fallback: generate pseudo-hash with the right alphabet
  const gen = (alphabet: string, len: number) =>
    Array(len)
      .fill(0)
      .map(() => alphabet[Math.floor(Math.random() * alphabet.length)])
      .join('');

  return icon === 'sol'
    ? `${gen('123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz', 8)}...${gen('123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz', 4)}`
    : `0x${gen('0123456789abcdef', 8)}...${gen('0123456789abcdef', 4)}`;
}; 