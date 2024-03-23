<script>
import Layout from "@/components/Layout.vue";
import Carousel from "@/components/Carousel.vue";
// import image1 from "../../assets/img/banner-main.jpg";
const banner = require("../../assets/img/banner.jpg");
const tvDigital = require("../../assets/img/tv-digital.png");
const notiAr = require("../../assets/img/noti-ar.png");
const alfredoRojas = require("../../assets/img/alfredo-rojas.png");

import "vue3-carousel/dist/carousel.css";
export default {
  name: "HomeComponent",
  components: { Layout, Carousel },

  data: () => {
    return {
      audio: undefined,
      banner,
      tv: tvDigital,
      notiAr,
      alfredoRojas,
      images: [
        {
          id: 1,
          name: "Alfredo Rojas",
          url: require("@/assets/img/alfredo-rojas.jpg"),
        },
        {
          id: 2,
          name: "Mariana Camacho",
          url: require("@/assets/img/mariana-camacho.jpg"),
        },
        {
          id: 3,
          name: "Jesus Chamin Castro",
          url: require("@/assets/img/jesus-chamin-castro.jpg"),
        },
        {
          id: 4,
          name: "Neomar Cepeda",
          url: require("@/assets/img/neomar-cepeda.jpg"),
        },
        {
          id: 5,
          name: "Edgar Petit",
          url: require("@/assets/img/edgar-petit.jpg"),
        },
      ],
    };
  },
  methods: {
    play() {
      // play on mount
    },
  },
};
</script>
<template>
  <Layout>
    <section id="carousel" class="relative h-auto overflow-hidden bg-black">
      <div>
        <Carousel class="h-[800px]" :images="images" @play="play" />
      </div>
    </section>

    <section id="home" class="relative h-screen overflow-hidden bg-black">
      <div class="flex justify-center py-8 my-2 h-100">
        <figure class="flex-col flex w-[350px] lg:w-[600px]">
          <img
            class="w-[350px] m-auto"
            src="../../assets/img/live-stream.jpg"
            alt="ar-stereo"
          />
          <!-- Autoplay is allowed. -->
          <iframe
            id="player"
            src="https://sonic.cloudstreaming.eu/cp/widgets/player/single/?p=8036"
            height="110"
            width="100%"
            scrolling="no"
            style="border: none"
          />
        </figure>
      </div>
    </section>

    <section id="" class="relative overflow-hidden bg-black">
      <div class="flex justify-center text-white bg-black-light">
        <div class="flex items-center py-2 mx-2">
          <img
            class="w-[100px] lg:w-[250px]"
            :src="alfredoRojas"
            alt="alfredo-rojas"
            height="250"
          />
        </div>
        <div class="flex items-center py-2 mx-2">
          <img
            class="w-[100px] lg:w-[250px]"
            :src="tv"
            alt="ar-tv"
            height="250"
          />
        </div>
        <div class="flex items-center py-2 mx-2">
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
