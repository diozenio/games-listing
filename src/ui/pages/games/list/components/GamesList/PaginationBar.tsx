import Link from "next/link";
import React from "react";
import { PageSizeSelect } from "./PageSizeSelect";

interface PaginationBarProps {
  page?: number;
  pageSize?: number;
  next: string | null;
  previous: string | null;
  query?: string;
}

const PaginationBar = ({
  page,
  pageSize,
  next,
  previous,
  query,
}: PaginationBarProps) => {
  return (
    <div className="flex flex-col w-full items-end justify-center gap-4 md:items-center md:justify-between md:flex-row">
      <span className="hidden md:flex" />
      <div className="w-full flex justify-between items-center flex-row gap-2 md:w-fit">
        <Link
          href={{
            pathname: "/",
            query: { page: page ? page - 1 : 1, pageSize, query },
          }}
          passHref
        >
          <button
            className={`${
              !previous ? "opacity-50 cursor-not-allowed" : ""
            } bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded`}
            disabled={!previous}
          >
            Previous
          </button>
        </Link>
        <Link
          href={{
            pathname: "/",
            query: { page: page ? page + 1 : 2, pageSize, query },
          }}
          passHref
        >
          <button
            className={`${
              !next ? "opacity-50 cursor-not-allowed" : ""
            } bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded`}
            disabled={!next}
          >
            Next
          </button>
        </Link>
      </div>
      <PageSizeSelect page={page!} query={query!} pageSize={pageSize!} />
    </div>
  );
};

export { PaginationBar };
