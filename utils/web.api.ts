export const _window = () => {
  if (typeof window !== undefined) {
    return window;
  } else {
    return undefined;
  }
};

export const _document = () => {
  if (typeof document !== undefined) {
    return document;
  } else {
    return undefined;
  }
};

export const _sessionStorage = () => {
  if (typeof sessionStorage !== 'undefined') {
    return sessionStorage;
  } else {
    return undefined;
  }
};

export const _localStorage = () => {
  if (typeof localStorage !== 'undefined') {
    return localStorage;
  } else {
    return undefined;
  }
};

export const _isTouchDevice = () => {
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    //@ts-ignore
    navigator.msMaxTouchPoints > 0
  );
};
