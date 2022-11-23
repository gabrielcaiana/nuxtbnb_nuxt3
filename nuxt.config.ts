// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: "Mastering Nuxt | %s",
      htmlAttrs: {
        lang: 'en'
      },
      bodyAttrs: {
        class: ["my-style"]
      },
      meta: [{
        charset: 'utf-8'
      }]
    },
  },
});
