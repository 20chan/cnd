import { requireAuth } from '@cnd.sh/auth';
import { createServerFn } from '@tanstack/react-start';
import { auth } from './auth';

export const requireAuthServer = createServerFn()
  .validator((data: { redirectUrl: string }) => data)
  .handler(async ({ data }) => {
    return await requireAuth(auth, data.redirectUrl);
  });
