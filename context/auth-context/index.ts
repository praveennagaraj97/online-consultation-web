import { createContext, useContext, useState } from 'react';
import { subtractMinutes } from '../../utils/date-utils';
import { getAuthSession, setAuthSession } from './helpers';

interface AuthContextType {
  isLogged: boolean;
  login(rememberMe: boolean, token: { access: string; refresh: string }): void;
  refreshToken: () => void;
  revalidateLoginStatus: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  isLogged: false,
  login() {},
  refreshToken() {},
  revalidateLoginStatus() {},
});

export const useAuthContextData: () => AuthContextType = () => {
  const [isLogged, setIsLogged] = useState(false);

  function login(
    rememberMe: boolean = false,
    token: { access: string; refresh: string }
  ) {
    setIsLogged(true);
    setAuthSession(rememberMe, token.access, token.refresh);
  }

  function refreshToken() {
    const session = getAuthSession();
    if (session) {
      // Check if logged at is more than 29 days
      console.log('refresh_expiry is not handled');

      // Force refresh token before 5 mins ot after expired
      if (new Date() >= subtractMinutes(29, new Date(session.expires_at))) {
        // Set Next Refresh timer.
      }
    }
  }

  // Check if session exists
  function revalidateLoginStatus() {
    if (getAuthSession()) {
      setIsLogged(true);
      refreshToken();
    }
  }

  return {
    isLogged,
    login,
    refreshToken,
    revalidateLoginStatus,
  };
};

export const useAuthContext = () => useContext(AuthContext);

async function refreshAuthToken() {
  try {
  } catch (error) {}
}
