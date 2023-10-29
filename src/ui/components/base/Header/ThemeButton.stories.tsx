import { Meta } from "@storybook/react";
import { ThemeButton } from "./ThemeButton";
import { ThemeProvider } from "next-themes";
import { Theme } from "@radix-ui/themes";

export default {
  title: "Components/Base/ThemeButton",
  component: ThemeButton,
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
