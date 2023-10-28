"use client";
import { Select } from "@radix-ui/themes";
import { redirect } from "next/navigation";

const PageSizeSelect = ({
  page,
  query,
  pageSize,
}: {
  page: number;
  query: string;
  pageSize: number;
}) => {
  return (
    <Select.Root
      defaultValue={pageSize ? String(pageSize) : "12"}
      onValueChange={(value) => {
        window.location.href =
          "/" +
          `?pageSize=${value}` +
          (page ? `&page=${page}` : "") +
          (query ? `&query=${query}` : "");
      }}
    >
      <Select.Trigger />
      <Select.Content>
        <Select.Group>
          <Select.Label>Page Sizes</Select.Label>
          <Select.Item value="6">Page Size: 6</Select.Item>
          <Select.Item value="12">Page Size: 12</Select.Item>
          <Select.Item value="24">Page Size: 24</Select.Item>
          <Select.Item value="36">Page Size: 36</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export { PageSizeSelect };
