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
  results: T | null;
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

export interface ErrorEntity<E = void> {
  status_code: number;
  message: string;
  errors?: E;
}

export interface ErrorResponse<T> {
  response: {
    data: T;
  };
}
