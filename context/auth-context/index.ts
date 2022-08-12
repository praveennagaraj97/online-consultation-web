import { createContext, useContext, useState } from 'react';
import { StorageKeys } from '../../constants';
import { addNextDaysToDate, subtractMinutes } from '../../utils/date-utils';
import { _localStorage, _sessionStorage } from '../../utils/web.api';
import {
  getAuthSession,
  logoutUser,
  refreshAuthToken,
  setAuthSession,
} from './helpers';

interface AuthContextType {
  isLogged: boolean;
  login(rememberMe: boolean, token: { access: string; refresh: string }): void;
  revalidateLoginStatus: () => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  isLogged: false,
  login() {},
  revalidateLoginStatus() {},
  logout() {},
});

export const useAuthContextData: () => AuthContextType = () => {
  const [isLogged, setIsLogged] = useState(false);

  function login(
    rememberMe: boolean = false,
    token: { access: string; refresh: string }
  ) {
    setIsLogged(true);
    setAuthSession(rememberMe, token.access, token.refresh);
    _nextAutoRefreshToken();
  }

  // Check if session exists
  function revalidateLoginStatus() {
    const session = getAuthSession();
    if (session) {
      // Logout if login was 29 days before. | Refresh Token Expired
      if (addNextDaysToDate(29, new Date(session.logged_at)) < new Date()) {
        return logout();
      }

      setIsLogged(true);
      _nextAutoRefreshToken();
    }
  }

  async function logout() {
    // Make API call
    try {
      await logoutUser();
    } catch (_) {}

    _localStorage()?.removeItem(StorageKeys.ACCESS_TOKEN);
    _localStorage()?.removeItem(StorageKeys.REFRESH_TOKEN);
    _localStorage()?.removeItem(StorageKeys.AUTH_SESSION);
    _sessionStorage()?.removeItem(StorageKeys.ACCESS_TOKEN);
    _sessionStorage()?.removeItem(StorageKeys.REFRESH_TOKEN);
    _sessionStorage()?.removeItem(StorageKeys.AUTH_SESSION);
    setIsLogged(false);
  }

  let _cancelTimeOutId: any;
  function _nextAutoRefreshToken() {
    clearTimeout(_cancelTimeOutId);
    const session = getAuthSession();
    if (session) {
      const currentDate = new Date();
      const expireDate = subtractMinutes(1, new Date(session.expires_at));

      const nextRefreshTime = +expireDate - +currentDate;

      console.log(
        'NEXT REFRESH TOKEN AFTER : ',
        nextRefreshTime / 1000 / 60,
        ' minutes'
      );
      if (nextRefreshTime >= 2147483647) {
        return;
      }
      _cancelTimeOutId = setTimeout(async () => {
        try {
          await refreshAuthToken();
          _nextAutoRefreshToken();
        } catch (error) {
          logout();
        }
      }, nextRefreshTime);
    }
  }

  return {
    isLogged,
    login,
    revalidateLoginStatus,
    logout,
  };
};

export const useAuthContext = () => useContext(AuthContext);
