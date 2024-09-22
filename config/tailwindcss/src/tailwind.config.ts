import type { Config } from "tailwindcss";

export default <Omit<Config, "content">>{
  corePlugins: {
    preflight: false,
  },
  theme: {
    colors: {
      primary: {
        DEFAULT: "rgb(var(--color-primary))",
        "500": "rgb(var(--color-primary))",
      },
      error: {
        DEFAULT: "rgb(var(--color-error))",
        "500": "rgb(var(--color-error))",
      },
      gray: {
        "300": "rgb(var(--color-gray-300))",
        "500": "rgb(var(--color-gray-500))",
      },
      transparent: "transparent",
      black: "#000",
      white: "#fff",
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "0.5rem",
        },
      },
    },
  },
};
