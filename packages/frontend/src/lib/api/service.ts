import '@tanstack/react-start/server-only';

import { TOOLBELT_URL } from '../config';
import type { Service } from '../dtos/service';

export async function fetchServices(): Promise<Service[]> {
  const url = `${TOOLBELT_URL}/api/service`;

  const resp = await fetch(url);
  const data = (await resp.json()) as Service[];
  return data;
}

export async function fetchServiceHealth(
  name: string,
): Promise<boolean | null> {
  const url = `${TOOLBELT_URL}/api/service/health/${name}`;

  const resp = await fetch(url);
  if (!resp.ok) {
    return null;
  }
  const data = (await resp.json()) as boolean | null;
  return data;
}
