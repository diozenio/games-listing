import { Meta } from "@storybook/react";
import { Dropdown } from "./Dropdown";
import { ThemeProvider } from "next-themes";
import { Theme } from "@radix-ui/themes";

export default {
  title: "Components/Base/Dropdown",
  component: Dropdown,
  decorators: [
    (Story) => (
      <ThemeProvider attribute="class">
        <Theme id="theme" accentColor="ruby">
          {Story()}
        </Theme>
      </ThemeProvider>
    ),
  ],
} as Meta;

export const Default = {};
