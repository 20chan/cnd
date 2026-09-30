import { queryOptions } from '@tanstack/react-query';
import { createServerFn } from '@tanstack/react-start';
import { fetchLegenoAuditLogs, fetchLegenoUsers } from '#/lib/api';

const getUsers = createServerFn().handler(async () => {
  return await fetchLegenoUsers();
});

export const legenoUsersQueryOptions = queryOptions({
  queryKey: ['legenoUsers'],
  queryFn: () => getUsers(),
  staleTime: 1000 * 60,
});

const getAuditLogs = createServerFn().handler(async () => {
  return await fetchLegenoAuditLogs();
});

export const legenoAuditLogQueryOptions = queryOptions({
  queryKey: ['legenoAuditLog'],
  queryFn: () => getAuditLogs(),
  staleTime: 1000 * 60,
});
