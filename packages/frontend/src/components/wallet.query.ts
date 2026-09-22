import { queryOptions } from '@tanstack/react-query';
import { createServerFn } from '@tanstack/react-start';
import { fetchWallet } from '#/lib/api/wallet';

const getWallet = createServerFn().handler(async () => {
  return await fetchWallet();
});

export const walletQueryOptions = queryOptions({
  queryKey: ['wallet'],
  queryFn: getWallet,
});
