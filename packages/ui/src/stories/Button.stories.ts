import type { Meta as _Meta, StoryObj } from "@storybook/vue3";

import { Button } from "@/components/Button";

type Meta = _Meta<typeof Button>;
type Story = StoryObj<typeof meta>;

const meta = {
  title: "Forms/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    as: { control: "text" },
    size: { control: "select", options: ["base", "sm", "lg", "xl", "2xl"] },
    variant: { control: "select", options: ["default", "primary", "error"] },
    type: { control: "select", options: ["submit", "button"] },
    pill: { control: "boolean" },
    disabled: { control: "boolean" },
    loading: { control: "boolean" },
  },
  args: {
    as: "button",
    size: "base",
    variant: "default",
    type: "button",
    pill: false,
    disabled: false,
    loading: false,
    default: "Button", // Default slot text
  },
} satisfies Meta;

export default meta;

// Keep this to show the meta as the "Docs" story
export const DefaultStory: Story = {
  tags: ["!dev"],
};
