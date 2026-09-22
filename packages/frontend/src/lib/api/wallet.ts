import '@tanstack/react-start/server-only';

import type { WalletTransaction } from '../wallet';
import { TOOLBELT_URL } from './config';

export async function fetchWallet(): Promise<WalletTransaction[]> {
  const url = `${TOOLBELT_URL}/api/wallet`;

  const resp = await fetch(url);
  const data = (await resp.json()) as WalletTransaction[];
  return data;
}
