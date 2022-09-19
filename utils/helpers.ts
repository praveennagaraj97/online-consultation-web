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

export function randomString(length: number) {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result.toLowerCase();
}

export function loadScript(src: string, name: string) {
  return new Promise((resolve, reject) => {
    if (document.getElementById(name)) {
      resolve(true);
      return;
    }

    const script = document.createElement('script');
    script.id = name;
    script.src = src;
    script.async = true;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      reject('Failed to load');
    };
    document.body.appendChild(script);
  });
}
