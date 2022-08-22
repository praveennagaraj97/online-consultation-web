import type { ErrorEntity, ErrorResponse } from '../types/response';

export const apiErrorParser: <T = void>(
  error: unknown | any
) => ErrorEntity<T> = <T = ErrorEntity>(error: unknown | any) => {
  const err = error as ErrorResponse<ErrorEntity<T>>;

  return err?.response?.data;
};
