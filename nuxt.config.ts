// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        { name: "keywords", content: "ar stereo, AR Stereo, AR, Radio AR" },
      ],
    },
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/css/tailwind.css", "vue3-carousel/dist/carousel.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxt/image", "@pinia/nuxt"],
  nitro: {
    prerender: {
      routes: ["/"],
      ignore: ["/dynamic"],
    },
  },
});
