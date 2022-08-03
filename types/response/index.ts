export interface BaseAPiResponse<T = void> {
  result: T;
  status_code: number;
  message: string;
}

export interface PaginatedBaseAPiResponse<T> {
  count: number;
  next: boolean;
  prev: boolean;
  paginate_id: string | null;
  result: T | null;
  status_code: number;
  message: string;
}

export type PhoneType = {
  code: string;
  number: string;
};

export type ImageType = {
  image_src: string;
  blur_data_url: string;
  width: number;
  height: number;
};

export type ErrorEntity = {
  status_code: number;
  message: string;
};

export interface ErrorResponse<T> {
  response: {
    data: T;
  };
}
