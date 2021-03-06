export interface User {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  expiresIn: string;
}

export interface Post {
  id?: string;
  title: string;
  slug?: string;
  summary: string;
  content: string;
  text?: string;
  author?: string;
  publishedAt: Date;
}

export interface FbCreateResponse {
  name: string;
}

export interface PaginationCollection {
  currentPage: number;
  lastPage: number;
  pageSize: number;
  previousPage: number;
  nextPage: number;
  toPaginate: boolean;
  numResults: number;
  results: Post[];
}

export interface PaginateParams {
  id: string;
  itemsPerPage: number;
  currentPage: number;
  totalItems: number;
  optionsPerPage: number[];
}

export interface RequestParams {
  page?: number;
  queryString?: string;
  limit?: number;
}
