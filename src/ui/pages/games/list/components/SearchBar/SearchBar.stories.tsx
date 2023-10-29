import { Meta, StoryObj } from "@storybook/react";
import { SearchBar } from "./SearchBar";
import { ThemeProvider } from "next-themes";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes";
import "@/ui/styles/globals.css";

export default {
  title: "Components/Pages/List/SearchBar",
  component: SearchBar,
  parameters: {
    docs: {
      description: {
        component: "Search bar for the games list page",
      },
    },
  },
  control: { page: 1 },
  decorators: [
    (Story) => (
      <ThemeProvider attribute="class">
        <Theme id="theme" accentColor="ruby">
          {Story()}
        </Theme>
      </ThemeProvider>
    ),
  ],
  tags: ["autodocs"],
} as Meta<typeof SearchBar>;

export const Default = {};

export const WithDefaultValue = {
  args: {
    defaultValue: "My game",
  },
} as StoryObj<typeof SearchBar>;
