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

  modules: ["@nuxtjs/supabase"],

  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
  },

  runtimeConfig: {
    public: {
      googleApiKey: process.env.GOOGLE_API_KEY,
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
