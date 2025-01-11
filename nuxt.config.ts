export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['./assets/css/style.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxt/image'],
  compatibilityDate: '2025-01-04',
})
