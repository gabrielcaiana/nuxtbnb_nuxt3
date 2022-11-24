// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: "%s | Mastering Nuxt",
      htmlAttrs: {
        lang: "en",
      },
      bodyAttrs: {
        class: ["my-style"],
      },
      meta: [
        {
          charset: "utf-8",
        },
      ],
    },
  },

  css: ["~/assets/css/styles.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
