"use client";
import { IconButton } from "@radix-ui/themes";
import { useTheme } from "next-themes";
import { LuSun, LuMoon } from "react-icons/lu";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <IconButton
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      variant="ghost"
      className="outline-none rounded-full p-3 dark:text-dark-200 text-dark-800 font-bold"
    >
      <LuSun className="dark:hidden" size={24} />
      <LuMoon className="dark:flex hidden" size={24} />
    </IconButton>
  );
};

export { ThemeButton };
