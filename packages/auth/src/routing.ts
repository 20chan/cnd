import { redirect } from '@tanstack/react-router';
import { createServerFn } from '@tanstack/react-start';
import type { AuthClient } from './auth.ts';

type Handler = ({ request }: { request: Request }) => Promise<Response>;

export function authCallbackHandler(auth: AuthClient): Handler {
  return async ({ request }) => {
    const url = new URL(request.url);
    const code = url.searchParams.get('code');
    const state = url.searchParams.get('state');

    if (code == null || state == null) {
      return new Response('Missing code or state', { status: 400 });
    }

    const session = await auth.getSession();
    if (
      session.data.status !== 'authenticating' ||
      session.data.state !== state ||
      !session.data.codeVerifier
    ) {
      return new Response('Invalid session state', { status: 400 });
    }

    const redirectTo = session.data.redirect ?? '/';

    try {
      const sessionData = await auth.authenticate(
        code,
        session.data.codeVerifier,
      );
      await session.clear();
      await session.update(sessionData);
    } catch (_) {
      await session.clear();
      return new Response('Authentication failed', { status: 500 });
    }

    throw redirect({ href: redirectTo, replace: true });
  };
}

export function authLoginHandler(auth: AuthClient): Handler {
  return async ({ request }) => {
    const url = new URL(request.url);

    const { state, codeVerifier } = auth.prepareAuth();
    const authorizationURL = auth.createAuthorizationURL(state);
    const redirectUrl = url.searchParams.get('redirect');

    const session = await auth.getSession();

    await session.update({
      status: 'authenticating',
      state,
      codeVerifier,
      redirect: redirectUrl,
    });

    throw redirect({
      href: authorizationURL.toString(),
      statusCode: 302,
    });
  };
}

export async function requireAuth(auth: AuthClient, redirectUrl: string) {
  const state = await auth.getAuthState();

  if (!state.authenticated) {
    const searchParams = new URLSearchParams();
    searchParams.set('redirect', redirectUrl);
    throw redirect({
      to: '/api/auth/login',
      search: {
        redirect: redirectUrl,
      },
      replace: true,
    });
  }

  return { state };
}
