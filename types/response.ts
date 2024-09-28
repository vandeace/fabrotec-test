export interface TResponse<T> {
  products: T[];
  total: number;
  skip: number;
  limit: number;
}

export interface TSort {
  sortBy: string;
  order: string;
}

export type TPaginatedRequest<T> = {
  skip: number;
  filter?: T;
  limit: number;
  sort?: TSort;
};
