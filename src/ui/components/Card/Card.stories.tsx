import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "Components/Games/Card",
  component: Card,
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component: "Component for displaying a game card",
      },
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "300px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const WithImage: StoryObj<typeof Card> = {
  render: () => (
    <Card.Root href="https://www.google.com">
      <Card.Image src="https://via.placeholder.com/150" alt="Placeholder" />
    </Card.Root>
  ),
};

export const WithTitle: StoryObj<typeof Card> = {
  render: () => (
    <Card.Root href="https://www.google.com">
      <Card.Content>
        <Card.Title>Card Title</Card.Title>
      </Card.Content>
    </Card.Root>
  ),
};

export const WithImageAndTitle: StoryObj<typeof Card> = {
  render: () => (
    <Card.Root href="https://www.google.com">
      <Card.Image src="https://via.placeholder.com/150" alt="Placeholder" />
      <Card.Content>
        <Card.Title>Card Title</Card.Title>
      </Card.Content>
    </Card.Root>
  ),
};

export const WithTags: StoryObj<typeof Card> = {
  render: () => (
    <Card.Root href="https://www.google.com">
      <Card.Image src="https://via.placeholder.com/150" alt="Placeholder" />
      <Card.Content>
        <Card.Title>Card Title</Card.Title>
        <Card.Tag>Card Tag 1</Card.Tag>
        <Card.Tag>Card Tag 2</Card.Tag>
      </Card.Content>
    </Card.Root>
  ),
};
