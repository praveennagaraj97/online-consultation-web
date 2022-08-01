import type { SetStateAction } from 'react';

export const transformToNumberPipe = (value: string) => {
  if (!value.length) {
    return '';
  }

  try {
    return parseInt(value);
  } catch (error) {
    return '';
  }
};

export function toggleFixedHeader(
  scrollHeight: number,
  setIsFixed: (value: SetStateAction<boolean>) => void,
  options: {
    isRoot: boolean;
    rootPageMargin: number;
    otherPageMargin: number;
    isCancelled: boolean;
  }
) {
  if (options.isCancelled) {
    return;
  }

  if (
    scrollHeight >=
    (options.isRoot ? options.rootPageMargin : options.otherPageMargin)
  ) {
    setIsFixed(true);
  } else {
    setIsFixed(false);
  }
}

export const validateEmail = (email: string) =>
  email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

export function slugify(term: string) {
  return term
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}
