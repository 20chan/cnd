import { authCallbackHandler } from '@cnd.sh/auth';
import { createFileRoute } from '@tanstack/react-router';
import { auth } from '#/lib/auth';

export const Route = createFileRoute('/api/auth/callback')({
  server: {
    handlers: {
      GET: authCallbackHandler(auth),
    },
  },
});
