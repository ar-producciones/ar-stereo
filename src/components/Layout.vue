<script>
//import Header from "./Header.vue";
import Footer from "./Footer.vue";
import NavBar from "./NavBar.vue";

export default {
  name: "LayoutComponent",
  components: { /* Header */ Footer, NavBar },
  data() {
    return {
      navigation: [
        { name: "Inicio", href: "#home", current: true },
        { name: "Noticias", href: "#news", current: false },
        { name: "Acerca de", href: "#about", current: false },
      ],
    };
  },
  methods: {},
};
</script>
<template>
  <div class="flex flex-col w-full">
    <NavBar :navigation="navigation" />
    <!-- <Header /> -->
    <slot></slot>
    <Footer />
  </div>
</template>
