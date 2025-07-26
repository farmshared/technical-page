import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const checkWebGL = () => {
  const canvas = document.createElement("canvas");
  return !!canvas.getContext("webgl") || !!canvas.getContext("experimental-webgl");
};
