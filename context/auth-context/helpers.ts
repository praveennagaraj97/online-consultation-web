import axios from 'axios';
import { StorageKeys } from '../../constants';
import { privateRoutes } from '../../routes/api-routes';
import type { SessionData } from '../../types/globals';
import type { RefreshTokenResponse } from '../../types/response/auth.response';
import { addMinutes, addNextDaysToDate } from '../../utils/date-utils';
import { requestOptions } from '../../utils/fetchOptions';
import {
  _isMobileBrowser,
  _isSafari,
  _localStorage,
  _sessionStorage,
} from '../../utils/web.api';

export function getAuthSession() {
  let session: string;
  session =
    _localStorage()?.getItem(StorageKeys.AUTH_SESSION) ||
    _sessionStorage()?.getItem(StorageKeys.AUTH_SESSION) ||
    '';

  return session ? (JSON.parse(session) as SessionData) : null;
}

export function setAuthSession(
  rememberMe: boolean,
  access: string,
  refresh: string
) {
  const sessionData: SessionData = {
    logged_at: new Date(),
    rememberMe,
    // If remember 30 days else 30 mins
    expires_at: rememberMe ? addNextDaysToDate(29) : addMinutes(30),
  };

  // Store in local Storage with expiry of 30 days
  if (rememberMe) {
    _localStorage()?.setItem(
      StorageKeys.AUTH_SESSION,
      JSON.stringify(sessionData)
    );
  } else {
    // Store in session storage and keep refreshing for every 30 mins
    _sessionStorage()?.setItem(
      StorageKeys.AUTH_SESSION,
      JSON.stringify(sessionData)
    );
  }

  // Save token to localStorage or session if safari or mobile browser
  if (_isMobileBrowser() || _isSafari()) {
    if (rememberMe) {
      _localStorage()?.setItem(StorageKeys.ACCESS_TOKEN, access);
      _localStorage()?.setItem(StorageKeys.REFRESH_TOKEN, refresh);
    } else {
      _sessionStorage()?.setItem(StorageKeys.ACCESS_TOKEN, access);
      _sessionStorage()?.setItem(StorageKeys.REFRESH_TOKEN, refresh);
    }
  }
}

// Refresh Auth Token
export async function refreshAuthToken() {
  try {
    const { data } = await axios.get<RefreshTokenResponse>(
      privateRoutes.RefreshAuthToken,
      {
        params: {
          force: true,
        },
        ...requestOptions(),
      }
    );
    setAuthSession(false, data.access_token, data.refresh_token);
    console.log('refreshed');
    return data;
  } catch (error) {
    throw error;
  }
}

export async function logoutUser() {
  return axios.get(privateRoutes.Logout, requestOptions());
}
