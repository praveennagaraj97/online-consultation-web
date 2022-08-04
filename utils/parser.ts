import { ErrorEntity, ErrorResponse } from '../types/response';

export const apiErrorParser: <T = ErrorEntity>(
  error: unknown | any
) => T | ErrorEntity = <T = ErrorEntity>(error: unknown | any) => {
  const err = error as ErrorResponse<T>;

  return err?.response?.data;
};
