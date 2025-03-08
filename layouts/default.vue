<script setup>
import Footer from "../components/Layouts/Footer.vue";
import Header from "../components/Layouts/Header.vue";
import { CANONICAL_URL } from "../common/constants.js";
useHead(() => ({
  link: [
    {
      rel: "canonical",
      href: CANONICAL_URL,
    },
  ],
}));

const navigation = [
  { name: "Inicio", href: "#home", current: true },
  { name: "Noticias", href: "#news", current: false },
  { name: "Acerca de", href: "#about", current: false },
];
const alliedPrograms = [
  { name: "Tu Voz AR Stereo", href: "#", current: false },
  { name: "Noti Ar Ve", href: "#", current: false },
];
</script>
<template>
  <div class="layout">
    <Header :navigation="navigation" />
    <slot />
    <Footer :navigation="navigation" :alliedPrograms="alliedPrograms" />
  </div>
</template>
