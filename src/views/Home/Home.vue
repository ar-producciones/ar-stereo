<script>
import Layout from "@/components/Layout.vue";
// import image1 from "../../assets/img/banner-main.jpg";
const banner = require("../../assets/img/banner.jpg");
const tvDigital = require("../../assets/img/tv-digital.png");
const notiAr = require("../../assets/img/noti-ar.png");
const alfredoRojas = require("../../assets/img/alfredo-rojas.png");

import "vue3-carousel/dist/carousel.css";
export default {
  name: "HomeComponent",
  components: { Layout },
  data: () => {
    return {
      audio: undefined,
      banner,
      tv: tvDigital,
      notiAr,
      alfredoRojas,
    };
  },
};
</script>
<template>
  <Layout>
    <section id="" class="bg-black overflow-hidden relative h-auto">
      <div class="flex justify-center py-8 my-2">
        <img
          class="w-[350px] lg:w-full"
          src="../../assets/img/banner-main.jpg"
          alt="ar-stereo"
        />
      </div>
    </section>

    <section id="home" class="h-screen bg-black overflow-hidden relative">
      <div class="flex justify-center py-8 my-2 h-100">
        <figure class="flex-col flex w-[350px] lg:w-[600px]">
          <img
            class="w-[350px] m-auto"
            src="../../assets/img/live-stream.jpg"
            alt="ar-stereo"
          />
          <!-- Autoplay is allowed. -->
          <iframe
            src="https://sonic.cloudstreaming.eu/cp/widgets/player/single/?p=8036"
            height="110"
            width="100%"
            scrolling="no"
            style="border: none"
          />
        </figure>
      </div>
    </section>

    <section id="" class="bg-black overflow-hidden relative">
      <div class="bg-black-light flex justify-center text-white">
        <div class="py-2 flex items-center mx-2">
          <img
            class="w-[100px] lg:w-[250px]"
            :src="alfredoRojas"
            alt="alfredo-rojas"
            height="250"
          />
        </div>
        <div class="py-2 flex items-center mx-2">
          <img
            class="w-[100px] lg:w-[250px]"
            :src="tv"
            alt="ar-tv"
            height="250"
          />
        </div>
        <div class="py-2 flex items-center mx-2">
          <img
            class="w-[100px] lg:w-[250px]"
            :src="notiAr"
            alt="ar-tv"
            height="250"
          />
        </div>
      </div>
    </section>
  </Layout>
</template>
