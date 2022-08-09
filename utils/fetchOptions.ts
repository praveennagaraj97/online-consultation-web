import type { AxiosRequestConfig, AxiosRequestHeaders } from 'axios';
import { StorageKeys } from '../constants';
import {
  _isMobileBrowser,
  _isSafari,
  _localStorage,
  _sessionStorage,
} from './web.api';

export const requestOptions: () => AxiosRequestConfig = () => {
  let headers: AxiosRequestHeaders = {};

  const token =
    _localStorage()?.getItem(StorageKeys.ACCESS_TOKEN) ||
    _sessionStorage()?.getItem(StorageKeys.ACCESS_TOKEN);

  if (token && (_isMobileBrowser() || _isSafari())) {
    headers = {
      Authorization: `Bearer ${token}`,
    };
  }

  return {
    baseURL: process.env.NEXT_PUBLIC_API_BASEURL,
    withCredentials: true,
    headers,
  };
};
