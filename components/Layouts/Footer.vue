<script setup lang="ts">
import logo from "~/assets/img/banner.png";
import {
  BIconFacebook,
  BIconInstagram,
  BIconWhatsapp,
} from "bootstrap-icons-vue";

/* definePageMeta({
  layout: "default",
}); */
defineComponent({
  name: "FooterComponent",
});
</script>

<template>
  <footer class="flex justify-center px-8 text-white bg-black-light">
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
  </footer>
  <!--  -->
  <div class="px-2 bg-black-light text-gold-light lg:px-40">
    <p class="flex justify-center py-2">
      &copy; {{ new Date().getFullYear() }} AR Stereo &reg;
    </p>
  </div>
</template>
