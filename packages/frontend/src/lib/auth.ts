import { AuthClient } from '@cnd.sh/auth';
import {
  AUTH_CLIENT_ID,
  AUTH_CLIENT_SECRET,
  AUTH_ENDPOINT,
  AUTH_TOKEN_ENDPOINT,
  SESSION_DOMAIN,
  SESSION_PASSWORD,
} from './config';

export const auth = new AuthClient({
  endpoint: AUTH_ENDPOINT,
  tokenEndpoint: AUTH_TOKEN_ENDPOINT,
  clientId: AUTH_CLIENT_ID,
  clientSecret: AUTH_CLIENT_SECRET,
  sessionPassword: SESSION_PASSWORD,
  sessionDomain: SESSION_DOMAIN,
});
