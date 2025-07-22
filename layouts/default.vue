<script setup>
  import Footer from '../components/Layouts/Footer.vue'
  import Header from '../components/Layouts/Header.vue'
  import { CANONICAL_URL } from '../common/constants.js'
  useHead(() => ({
    link: [
      {
        rel: 'canonical',
        href: CANONICAL_URL
      }
    ]
  }))

  const navigation = [
    { name: 'Inicio', href: '/' },
    /* { name: "Noticias", href: "/news" }, */
    { name: 'Acerca de', href: '/about' }
  ]
  const alliedPrograms = [
    { name: 'Tu Voz AR Stereo', href: '#' },
    { name: 'Noti Ar Ve', href: '#' }
  ]
</script>
<template>
  <div>
    <Header :navigation="navigation" />
    <main>
      <slot />
    </main>
    <Footer :navigation="navigation" :alliedPrograms="alliedPrograms" />
  </div>
</template>
