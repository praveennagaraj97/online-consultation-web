import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';
import type { SWRConfiguration } from 'swr';

export const requestOptions: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_BASEURL,
  withCredentials: true,
};

export const fetcher = (url: string) => fetch(url).then((r) => r.json());

export const fetchOptions: SWRConfiguration = {
  revalidateOnFocus: false,
  revalidateOnMount: true,
  revalidateOnReconnect: true,
  shouldRetryOnError: true,
  errorRetryCount: 7,
  errorRetryInterval: 1000,
  fetcher: (url, params) =>
    axios({
      ...requestOptions,
      url,
      params: {
        ...params,
      },
    })
      .then((res) => res.data)
      .catch((e) => {
        throw e;
      }),
};
