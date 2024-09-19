import baseConfig from "@acme/tailwindcss-config";
import { Config } from "tailwindcss";

export default <Config>{
  presets: [baseConfig],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
};
