import type { PaginationMeta } from './common';

export type ApiResponse<T> = {
  message: string;
  data: T;
};

export type PaginatedResponse<T> = {
  message: string;
  data: T[];
  meta: PaginationMeta;
};

export type ApiFieldError = {
  field: string;
  message: string;
};

export type ApiError = {
  message: string;
  errors?: ApiFieldError[];
};

export type ListParams<TStatus extends string = string> = {
  page?: number;
  limit?: number;
  sort?: string;
  status?: TStatus;
};

