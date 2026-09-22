import '@tanstack/react-start/server-only';

import type { LegenoAuditLog, LegenoUser } from '../legeno';
import { LEGENO_KEY, LEGENO_URL } from './config';

async function fetchLegeno<T>(endpoint: string) {
  const resp = await fetch(`${LEGENO_URL}${endpoint}`, {
    headers: {
      'X-Admin-Token': LEGENO_KEY,
    },
  });

  if (!resp.ok) {
    throw new Error(`failed to fetch: ${resp.status} ${resp.statusText}`);
  }

  return (await resp.json()) as T;
}

export async function fetchLegenoUsers() {
  return await fetchLegeno<LegenoUser[]>('/admin/user');
}

export async function fetchLegenoAuditLogs() {
  return await fetchLegeno<LegenoAuditLog[]>('/admin/audit_log');
}
