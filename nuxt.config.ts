// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  css: ['@/assets/css/global.css'],

  runtimeConfig: {
    public: {
      contentIslandToken: process.env.NUXT_CONTENT_ISLAND_TOKEN,
    },
  },

  nitro: {
    preset: 'cloudflare_pages',
  },

  modules: ['@nuxt/eslint', '@nuxt/fonts'],
});
