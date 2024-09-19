import type { Meta as _Meta, StoryObj } from "@storybook/vue3";

import Button from "./Button.vue";

type Meta = _Meta<typeof Button>;
type Story = StoryObj<typeof meta>;

const meta = {
  title: "Forms/Button",
  component: Button,
  tags: ["autodocs", "!dev"],
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg", "xl"] },
    variant: { control: "select", options: ["primary", "default", "destructive"] },
    type: { control: "select", options: ["submit", "button"] },
    disabled: { control: "boolean" },
  },
  args: {
    size: "md",
    variant: "primary",
    type: "button",
    disabled: false,
    default: "Button", // Default slot text
  },
} satisfies Meta;

export default meta;

export const Primary: Story = {};
