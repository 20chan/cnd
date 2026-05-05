import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

type Inputs = Parameters<typeof clsx>;

export function cn(...inputs: Inputs): string {
  return twMerge(clsx(...inputs));
}
