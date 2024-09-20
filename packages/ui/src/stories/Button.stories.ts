import type { Meta as _Meta, StoryObj } from "@storybook/vue3";

import Button from "@/components/Button/Button.vue";

type Meta = _Meta<typeof Button>;
type Story = StoryObj<typeof meta>;

const meta = {
  title: "Forms/Button",
  component: Button,
  tags: ["autodocs", "!dev"],
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg", "xl"] },
    variant: { control: "select", options: ["primary", "default", "error"] },
    type: { control: "radio", options: ["submit", "button"] },
    pill: { control: "boolean" },
    disabled: { control: "boolean" },
    loading: { control: "boolean" },
  },
  args: {
    size: "md",
    variant: "primary",
    type: "button",
    pill: false,
    disabled: false,
    loading: false,
    default: "Button", // Default slot text
  },
} satisfies Meta;

export default meta;

export const Primary: Story = {};
