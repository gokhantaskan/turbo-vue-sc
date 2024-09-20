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
    asChild: { table: { control: false } },
    size: { control: "select", options: ["sm", "md", "lg", "xl"] },
    variant: { control: "select", options: ["primary", "default", "error"] },
    type: { control: "select", options: ["submit", "button"] },
    pill: { control: "boolean" },
    disabled: { control: "boolean" },
    loading: { control: "boolean" },
  },
  args: {
    as: "button",
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

// Keep this to show the meta as the "Docs" story
export const DefaultStory: Story = {
  tags: ["!dev"],
};

// Story for 'as' prop
export const AsLink: Story = {
  args: {
    as: "a",
    default: "Link Button",
  },
  render: args => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args" href="#">{{ args.default }}</Button>',
  }),
};

// Story for 'asChild' prop
export const AsChild: Story = {
  args: {
    as: undefined,
    asChild: true,
    default: "Custom Element",
  },
  render: args => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `
      <Button v-bind="args">
        <div>
          {{ args.default }}
        </div>
      </Button>
    `,
  }),
};
