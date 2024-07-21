<template>
  <div class="flex text-white bg-black-light lg:justify-center">
    <div
      class="flex flex-col flex-wrap justify-center py-4 lg:justify-around lg:flex-row lg:items-center"
    >
      <img
        class="hidden lg:flex"
        :src="logo"
        alt="ar-stereo"
        width="150"
        height="200"
      />
      <h3 class="mx-2 italic text-center font-montserrat">
        Latiendo con tu musica latina...
      </h3>
    </div>
  </div>
  <div class="flex justify-center px-8 text-white bg-black-light">
    <div class="">
      <div class="flex py-2 uppercase">
        <ul class="m-2">
          <li>
            <a
              href="https://www.facebook.com/people/AR-Stereo-Oficial/100083274582169/"
              target="_blank"
            >
              <BIconFacebook class="text-2xl hover:text-gold-light"
            /></a>
          </li>
        </ul>
        <ul class="m-2">
          <li>
            <a
              href="https://www.instagram.com/arstereooficiall/"
              target="_blank"
            >
              <BIconInstagram class="text-2xl hover:text-gold-light"
            /></a>
          </li>
        </ul>
        <ul class="m-2">
          <li>
            <a href="https://wa.link/xkbjn8" target="_blank">
              <BIconWhatsapp class="text-2xl hover:text-gold-light"
            /></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!--  -->
  <div class="px-2 bg-black-light text-gold-light lg:px-40">
    <p class="flex justify-center py-2">
      &copy; {{ new Date().getFullYear() }} AR Stereo &reg;
    </p>
  </div>
</template>
<script>
const logo = require("../assets/img/banner.png");
import {
  BIconFacebook,
  BIconInstagram,
  BIconWhatsapp,
} from "bootstrap-icons-vue";
export default {
  name: "FooterComponent",
  components: { BIconFacebook, BIconInstagram, BIconWhatsapp },

  data() {
    return {
      logo,
    };
  },
  methods: {},
};
</script>
