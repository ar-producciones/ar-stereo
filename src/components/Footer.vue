<template>
  <div class="bg-black-light flex justify-around text-white">
    <div class="py-4 flex items-center">
      <img :src="logo" alt="ar-stereo" width="150" height="200" />
      <h3 class="font-montserrat italic">Latiendo con tu musica latina...</h3>
    </div>
  </div>
  <div
    class="bg-black-light text-white flex justify-center px-8"
  >
    <div class="">
      <div class="uppercase flex py-2">
        <ul class="m-2">
          <li>
            <a href="#"> <BIconFacebook class="text-2xl hover:text-gold-light" /></a>
          </li>
        </ul>
        <ul class="m-2">
          <li>
            <a href="#"> <BIconInstagram class="text-2xl hover:text-gold-light" /></a>
          </li>
        </ul>
        <ul class="m-2">
          <li>
            <a href="#"> <BIconTwitterX class="text-2xl hover:text-gold-light" /></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!--  -->
  <div class="bg-black-light text-gray-200 px-40">
    <p class="flex justify-center py-2">
      Derechos Reservados &copy; {{ new Date().getFullYear() }}
    </p>
  </div>
</template>
<script>
const logo = require("../assets/img/logo.png");
import {
  BIconFacebook,
  BIconTwitterX,
  BIconInstagram,
} from "bootstrap-icons-vue";
export default {
  name: "FooterComponent",
  components: { BIconFacebook, BIconTwitterX, BIconInstagram },

  data() {
    return {
      logo,
    };
  },
  methods: {},
};
</script>
