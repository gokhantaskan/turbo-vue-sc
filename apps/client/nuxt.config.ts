// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["@acme/ui/main.scss"],
  future: { compatibilityVersion: 4 },
  typescript: { typeCheck: true },
  modules: [
    [
      "@nuxtjs/tailwindcss",
      {
        cssPath: ["~/assets/styles/tailwind.css", { injectPosition: "first" }],
        configPath: "tailwind.config",
        exposeConfig: {
          level: 2,
        },
        config: {},
        viewer: true,
      },
    ],
    ["@nuxt/eslint", {}],
  ],
});
