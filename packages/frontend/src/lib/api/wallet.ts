import '@tanstack/react-start/server-only';

import { TOOLBELT_URL } from '../config';
import type { WalletTransaction } from '../dtos/wallet';

export async function fetchWallet(): Promise<WalletTransaction[]> {
  const url = `${TOOLBELT_URL}/api/wallet`;

  const resp = await fetch(url);
  const data = (await resp.json()) as WalletTransaction[];
  return data;
}
