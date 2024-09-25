// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/styles/main.scss"],
  future: { compatibilityVersion: 4 },
  typescript: { typeCheck: true },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap",
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
        viewer: true,
      },
    ],
    ["@nuxt/eslint", {}],
  ],
});
