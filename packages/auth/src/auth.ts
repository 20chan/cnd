import { useSession } from '@tanstack/react-start/server';
import * as arctic from 'arctic';
import * as jose from 'jose';
import type { AppSession, User } from './session.ts';

export const defaultScopes = ['openid', 'profile', 'email'];

export interface AuthOptions {
  endpoint: string;
  tokenEndpoint: string;
  clientId: string;
  clientSecret: string;
  scopes?: string[];

  sessionPassword: string;
  sessionDomain: string;
}

type JWT = jose.JWTPayload & {
  sub: string;
  name: string;
  email: string;
  roles: string;
};

export class AuthClient {
  private readonly auth;

  constructor(private readonly options: AuthOptions) {
    this.auth = new arctic.OAuth2Client(
      options.clientId,
      options.clientSecret,
      null,
    );
  }

  private get scopes(): string[] {
    return this.options.scopes ?? defaultScopes;
  }

  createAuthorizationURL(state: string): URL {
    return this.auth.createAuthorizationURL(
      this.options.endpoint,
      state,
      this.scopes,
    );
  }

  prepareAuth() {
    return {
      state: arctic.generateState(),
      codeVerifier: arctic.generateCodeVerifier(),
    };
  }

  async authenticate(code: string, codeVerifier: string): Promise<AppSession> {
    const tokens = await this.auth.validateAuthorizationCode(
      this.options.tokenEndpoint,
      code,
      codeVerifier,
    );
    return this.parseSession(tokens);
  }

  async refresh(refreshToken: string): Promise<AppSession> {
    const tokens = await this.auth.refreshAccessToken(
      this.options.tokenEndpoint,
      refreshToken,
      this.scopes,
    );
    return this.parseSession(tokens);
  }

  async getAuthState(): Promise<AuthState> {
    const session = await this.getSession();

    if (session.data.status !== 'authenticated' || !session.data.accessToken) {
      return { authenticated: false };
    }

    if (
      session.data.accessTokenExpiresAt !== undefined &&
      session.data.accessTokenExpiresAt <= Date.now()
    ) {
      const refreshToken = session.data.refreshToken;
      if (refreshToken) {
        try {
          const newSessionData = await this.refresh(refreshToken);
          await session.clear();
          await session.update(newSessionData);
          return await this.getAuthState();
        } catch (err) {
          console.error('Failed to refresh access token:', err);
          await session.clear();
          return { authenticated: false };
        }
      }

      return { authenticated: false };
    }

    if (!session.data.user) {
      return { authenticated: false };
    }

    return {
      authenticated: true,
      user: session.data.user,
    };
  }

  async getSession(): ReturnType<typeof useSession<AppSession>> {
    return await useSession<AppSession>({
      name: 'app-session',
      password: this.options.sessionPassword,
      cookie: {
        secure: true,
        httpOnly: true,
        sameSite: 'lax',
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
        domain: this.options.sessionDomain,
      },
    });
  }

  private parseSession(tokens: arctic.OAuth2Tokens): AppSession {
    const idToken = jose.decodeJwt<JWT>(tokens.idToken());
    const roles = idToken.roles.split(',');

    return {
      status: 'authenticated',
      user: {
        id: idToken.sub,
        name: idToken.name,
        email: idToken.email,
        roles,
      },
      accessToken: tokens.accessToken(),
      accessTokenExpiresAt: tokens.accessTokenExpiresAt().getTime(),
      refreshToken: tokens.hasRefreshToken() ? tokens.refreshToken() : null,
    };
  }
}

export type AuthState =
  | { authenticated: false }
  | { authenticated: true; user: User };
