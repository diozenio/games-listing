"use client";
import { Button, DropdownMenu, Separator } from "@radix-ui/themes";
import { useTheme } from "next-themes";
import Link from "next/link";
import { LuAlignJustify, LuGithub, LuMoon, LuSun } from "react-icons/lu";

const Dropdown = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button className="rounded-full outline-none">
          <LuAlignJustify
            size={24}
            className="dark:text-dark-200 text-[#1C2024]"
          />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item>
          <Link
            href="https://github.com/diozenio/"
            target="_blank"
            className="flex flex-row items-center gap-2 text-lg"
          >
            GitHub
            <LuGithub size={18} />
          </Link>
        </DropdownMenu.Item>
        <Separator className="w-full my-1" />
        <DropdownMenu.Item
          onClick={() => {
            setTheme(isDark ? "light" : "dark");
          }}
          className="flex flex-row items-center gap-2 text-lg"
        >
          Theme{" "}
          <span>
            <LuSun className="dark:hidden" />
            <LuMoon className="hidden dark:flex" />
          </span>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export { Dropdown };
