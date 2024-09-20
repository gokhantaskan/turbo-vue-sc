import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

export default <Omit<Config, "content">>{
  corePlugins: {
    preflight: false,
  },
  theme: {
    colors: {
      primary: colors.blue,
      gray: colors.slate,
      success: colors.green,
      warning: colors.amber,
      error: colors.red,
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
