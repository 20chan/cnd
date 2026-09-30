export type User = {
  id: string;
  name: string;
  email: string;
  roles: string[];
};

type AuthenticatingSession = {
  status: 'authenticating';
  state: string;
  codeVerifier: string;
  redirect: string | null;
};

type AuthenticatedSession = {
  status: 'authenticated';
  user: User;
  accessToken: string;
  accessTokenExpiresAt: number;
  refreshToken: string | null;
};

export type AppSession = AuthenticatingSession | AuthenticatedSession;
