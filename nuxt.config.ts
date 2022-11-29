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

  runtimeConfig: {
    public: {
      googleApiKey: process.env.GOOGLE_API_KEY,
      algoliaAppId: process.env.ALGOLIA_APP_ID,
      algoliaApiKey: process.env.ALGOLIA_API_KEY,
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
