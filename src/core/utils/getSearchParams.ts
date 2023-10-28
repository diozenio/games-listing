import {
  SearchParams,
  URLSearchParams,
} from "@/core/domain/types/searchParams";

export const getSearchParams = (
  urlSearchParams: URLSearchParams
): SearchParams => {
  const searchParams: SearchParams = {
    page: 1,
    pageSize: 12,
  };

  if (typeof urlSearchParams.page === "string") {
    const page = Number(urlSearchParams.page);
    if (page >= 1 && page <= 250) {
      searchParams.page = page;
    }
  }

  if (typeof urlSearchParams.pageSize === "string") {
    const pageSize = Number(urlSearchParams.pageSize);
    if (pageSize >= 1 && pageSize <= 40) {
      searchParams.pageSize = pageSize;
    }
  }

  if (typeof urlSearchParams.query === "string") {
    searchParams.query = urlSearchParams.query;
  }

  return searchParams;
};
