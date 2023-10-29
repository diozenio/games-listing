import { Meta } from "@storybook/react";
import Scaffold from "./Scaffold";
import ThemeProvider from "@/ui/providers/ThemeProvider";

export default {
  title: "Components/Base/Scaffold",
  component: Scaffold,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta;

export const Default = {
  render: () => <Scaffold>Default Scaffold</Scaffold>,
};
