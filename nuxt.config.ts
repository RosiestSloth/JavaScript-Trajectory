export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-br',
      },
      title: 'JavaScript Trajectory',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Este é um site sobre a trajetória do JavaScript, com tutoriais e recursos educativos.' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
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
