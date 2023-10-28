"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Theme } from "@radix-ui/themes";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextThemesProvider attribute="class">
      <Theme id="theme" accentColor="ruby">
        {children}
      </Theme>
    </NextThemesProvider>
  );
}
