import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [{ name: 'keywords', content: 'ar stereo, AR Stereo, AR, Radio AR' }],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxt/icon', '@nuxt/image-edge', '@nuxt/ui'],
  css: ['~/assets/css/main.css', 'vue3-carousel/dist/carousel.css'],

  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {}
    }
  },

  nitro: {
    prerender: {
      routes: ['/'],
      ignore: ['/dynamic']
    }
  }
})
