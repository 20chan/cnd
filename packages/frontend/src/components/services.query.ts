import { queryOptions } from '@tanstack/react-query';
import { createServerFn } from '@tanstack/react-start';
import { fetchServiceHealth, fetchServices } from '#/lib/api';

export const getServices = createServerFn().handler(async () => {
  return await fetchServices();
});

export const servicesQueryOptions = queryOptions({
  queryKey: ['services'],
  queryFn: () => getServices(),
  staleTime: 1000 * 60,
});

export const getHealth = createServerFn()
  .validator((data: { name: string }) => data)
  .handler(async ({ data }) => {
    const result = await fetchServiceHealth(data.name);
    return { name: data.name, result };
  });

export const healthQueryOptions = (name: string) =>
  queryOptions({
    queryKey: ['health', name],
    queryFn: () => getHealth({ data: { name } }),
    staleTime: 1000 * 60 * 30,
  });
