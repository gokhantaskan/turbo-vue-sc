// Avoid using compiled CSS here to prevent breaking Hot Module Replacement (HMR)
import "@/assets/styles/main.scss";

import type { Preview } from "@storybook/vue3";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      sort: "requiredFirst",
    },
  },
  tags: ["autodocs"],
};

export default preview;
