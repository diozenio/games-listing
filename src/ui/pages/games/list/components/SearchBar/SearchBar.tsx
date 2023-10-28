"use client";
import { LuSearch } from "react-icons/lu";
import { Button, Popover, TextField } from "@radix-ui/themes";
import { useCallback, useState } from "react";

const SearchBar = ({ defaultValue }: { defaultValue: string | undefined }) => {
  const [query, setQuery] = useState("");

  const search = useCallback((query: string) => {
    if (query) window.location.href = `/?query=${query}`;
  }, []);

  return (
    <TextField.Root
      className="w-full sm:max-w-md mt-6 md:mt-8"
      variant="surface"
    >
      <TextField.Input
        type="search"
        inputMode="search"
        defaultValue={defaultValue}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            search(e.currentTarget.value);
          }
        }}
        onChange={(e) => {
          setQuery(e.currentTarget.value);
        }}
        placeholder="Search a game"
        className="pl-2 py-6 font-medium border-dark-800 dark:border-dark-700 dark:bg-dark-800"
      />
      <TextField.Slot className="p-0">
        <Button
          className="rounded-l-none h-full px-4 bg-dark-800 dark:bg-dark-700 "
          variant="solid"
          onClick={() => {
            search(query);
          }}
        >
          <LuSearch size={24} />
        </Button>
      </TextField.Slot>
    </TextField.Root>
  );
};

export { SearchBar };
