import type { Meta } from "@storybook/vue3";

import Button from "./Button.vue";

const meta = {
  title: "Form/Button",
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
} satisfies Meta<typeof Button>;

export default meta;
