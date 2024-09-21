// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["@acme/ui/main.scss", "~/assets/styles/main.scss"],
  future: { compatibilityVersion: 4 },
  typescript: { typeCheck: true },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap",
        },
      ],
    },
  },
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
