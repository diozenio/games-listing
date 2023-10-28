import { PaginationParams } from "./pagination";

export type SearchParams = PaginationParams & {
  query?: string;
};

export type URLSearchParams = {
  [key: string]: string | string[] | undefined;
};
