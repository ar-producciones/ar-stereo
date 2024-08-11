<script>
//import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Test from "./Test.vue";

export default {
  name: "LayoutComponent",
  components: { /* Header */ Footer, Test },
  data() {
    return {
      navigation: [
        { name: "Inicio", href: "#home", current: true },
        { name: "Acerca de", href: "#about", current: false },
      ],
    };
  },
  methods: {},
};
</script>
<template>
  <div class="flex flex-col w-full">
    <Test :navigation="navigation" />
    <!-- <Header /> -->
    <slot></slot>
    <Footer />
  </div>
</template>
