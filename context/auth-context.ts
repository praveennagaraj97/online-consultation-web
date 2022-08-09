import { createContext, useContext, useState } from 'react';
import { StorageKeys } from '../constants';
import { addNextDaysToDate } from '../utils/date-utils';
import {
  _isMobileBrowser,
  _isSafari,
  _localStorage,
  _sessionStorage,
} from '../utils/web.api';

interface AuthContextType {
  isLogged: boolean;
  login(rememberMe: boolean, token: { access: string; refresh: string }): void;
}

export const AuthContext = createContext<AuthContextType>({
  isLogged: false,
  login() {},
});

export const useAuthContextData: () => AuthContextType = () => {
  const [isLogged, setIsLogged] = useState(false);

  function login(
    rememberMe: boolean = false,
    token: { access: string; refresh: string }
  ) {
    setIsLogged(true);
    const sessionData = {
      logged_at: new Date().toLocaleString(),
      // If remember 30 days else 30 mins
      nextRefreshAt: addNextDaysToDate(29),
    };

    // Store in local Storage with expiry of 30 days
    if (rememberMe) {
      _localStorage()?.setItem(
        StorageKeys.LOGIN_DETAILS,
        JSON.stringify(sessionData)
      );
    } else {
      // Store in session storage and keep refreshing for every 30 mins
      _sessionStorage()?.setItem(
        StorageKeys.LOGIN_DETAILS,
        JSON.stringify(sessionData)
      );
    }

    // Save token to localStorage or session if safari or mobile browser
    if (_isMobileBrowser() || _isSafari()) {
      if (rememberMe) {
        _localStorage()?.setItem(StorageKeys.ACCESS_TOKEN, token?.access);
        _localStorage()?.setItem(StorageKeys.REFRESH_TOKEN, token?.refresh);
      } else {
        _sessionStorage()?.setItem(StorageKeys.ACCESS_TOKEN, token?.access);
        _sessionStorage()?.setItem(StorageKeys.REFRESH_TOKEN, token?.refresh);
      }
    }
  }

  return {
    isLogged,
    login,
  };
};

export const useAuthContext = () => useContext(AuthContext);
