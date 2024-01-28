<template>
  <div class="bg-black-light lg:justify-center flex text-white">
    <div
      class="flex flex-col justify-center lg:justify-around lg:flex-row lg:items-center py-4 flex-wrap"
    >
      <img
        class="hidden lg:flex"
        :src="logo"
        alt="ar-stereo"
        width="150"
        height="200"
      />
      <h3 class="text-center font-montserrat italic mx-2">
        Latiendo con tu musica latina...
      </h3>
    </div>
  </div>
  <div class="bg-black-light text-white flex justify-center px-8">
    <div class="">
      <div class="uppercase flex py-2">
        <ul class="m-2">
          <li>
            <a href="#">
              <BIconFacebook class="text-2xl hover:text-gold-light"
            /></a>
          </li>
        </ul>
        <ul class="m-2">
          <li>
            <a href="#">
              <BIconInstagram class="text-2xl hover:text-gold-light"
            /></a>
          </li>
        </ul>
        <ul class="m-2">
          <li>
            <a href="#">
              <BIconTwitterX class="text-2xl hover:text-gold-light"
            /></a>
          </li>
        </ul>
        <ul class="m-2">
          <li>
            <a href="#">
              <BIconWhatsapp class="text-2xl hover:text-gold-light"
            /></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!--  -->
  <div class="bg-black-light text-gold-light px-2 lg:px-40">
    <p class="flex justify-center py-2">
      &copy; {{ new Date().getFullYear() }} AR Stereo &reg;
    </p>
  </div>
</template>
<script>
const logo = require("../assets/img/banner.png");
import {
  BIconFacebook,
  BIconTwitterX,
  BIconInstagram,
  BIconWhatsapp
} from "bootstrap-icons-vue";
export default {
  name: "FooterComponent",
  components: { BIconFacebook, BIconTwitterX, BIconInstagram, BIconWhatsapp },

  data() {
    return {
      logo,
    };
  },
  methods: {},
};
</script>
