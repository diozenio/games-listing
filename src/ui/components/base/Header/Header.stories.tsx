import { Meta } from "@storybook/react";
import { Header } from "./Header";
import ThemeProvider from "@/ui/providers/ThemeProvider";

export default {
  title: "Components/Base/Header",
  component: Header,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta;

export const Default = {};
