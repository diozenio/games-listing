import { Meta, StoryObj } from "@storybook/react";
import { PageSizeSelect } from "./PageSizeSelect";
import { ThemeProvider } from "next-themes";
import { Theme } from "@radix-ui/themes";

export default {
  title: "Components/Pages/List/PageSizeSelect",
  component: PageSizeSelect,
  parameters: {
    docs: {
      description: {
        component:
          "A select input for choosing the number of items per page. Redirect to the page size selected using search parameters.",
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
} as Meta<typeof PageSizeSelect>;

export const Default = {};

export const WithPageSize6: StoryObj<typeof PageSizeSelect> = {
  args: {
    pageSize: 6,
  },
};

export const WithPageSize12: StoryObj<typeof PageSizeSelect> = {
  args: {
    pageSize: 12,
  },
};

export const WithPageSize24: StoryObj<typeof PageSizeSelect> = {
  args: {
    pageSize: 24,
  },
};

export const WithPageSize48: StoryObj<typeof PageSizeSelect> = {
  args: {
    pageSize: 36,
  },
};
