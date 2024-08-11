<script>
import Layout from "@/components/Layout.vue";
import Carousel from "@/components/Carousel.vue";
import DownloadButton from "@/components/ButtonLink.vue";
const banner = require("../../assets/img/banner.jpg");
const tvDigital = require("../../assets/img/tv-digital.png");
const notiAr = require("../../assets/img/noti-ar.png");
const alfredoRojas = require("../../assets/img/alfredo-rojas.png");
const logo = require("../../assets/img/banner.png");
import "vue3-carousel/dist/carousel.css";
import { BIconGooglePlay, BIconApple } from "bootstrap-icons-vue";
export default {
  name: "HomeComponent",
  components: {
    Layout,
    Carousel,
    DownloadButton,
    BIconGooglePlay,
    BIconApple,
  },
  data: () => {
    return {
      description: "Descargala en",
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
      logo,
    };
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

    <section id="home" class="relative overflow-hidden bg-black">
      <div class="player">
        <iframe
          src="https://players.hostingned.net/playlivestream/arstereo/"
          scrolling="no"
          frameborder="0"
        ></iframe>
      </div>
    </section>
    <section>
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
          <div class="flex flex-col ml-6">
            <h4 class="mx-2 italic text-center font-montserrat">
              Latiendo con tu musica latina...
            </h4>
            <div class="flex flex-col items-center lg:flex-row">
              <DownloadButton
                theme="gold"
                :description="description"
                store="android"
                value="Google Play"
                :icon="BIconGooglePlay"
              >
                <BIconGooglePlay class="text-2xl" />
              </DownloadButton>
              <DownloadButton
                theme="dark"
                :description="description"
                store="apple"
                value="Apple Store"
                :icon="BIconApple"
              >
                <BIconApple class="text-2xl" />
              </DownloadButton>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="about">
      <div class="flex flex-col justify-between py-8 text-white bg-black">
        <h1 class="p-8 mx-8 text-5xl italic text-gold font-montserrat">
          AR Stereo
        </h1>
        <div
          class="flex flex-col m-8 md:justify-around sm:flex-col md:flex-col lg:flex-row"
        >
          <div
            class="text-2xl italic text-justify text-gray-300 indent-8 lg:mx-2"
          >
            <p class="w-max-[600px] md:w-[600px]">
              Somos una estación de radio digital con una programación distinta
              a lo escuchado ya, Somos el estilo Crossover que está innovando en
              la web musical, mejor balanceado y con súper sonido digital…
            </p>
            <span class="indent-4">
              <!-- <h2 class="p-8 mx-8 text-3xl italic text-gold font-montserrat">
                Mision
              </h2>
              <p class="w-max-[600px] md:w-[600px] indent-8">
                Somos una estación de radio digital con una programación
                distinta a lo escuchado ya, Somos el estilo Crossover que está
                innovando en la web musical, mejor balanceado y con súper sonido
                digital…
              </p> -->
              <br />
              <h2 class="p-8 mx-8 text-3xl italic text-gold font-montserrat">
                Nuestra Vision
              </h2>
              <p class="w-max-[600px] md:w-[600px] indent-8">
                Tenemos la visión de llegar a los diferentes estratos de
                audiencia a nivel mundial siendo nuestra prioridad el público
                latino en todo el mundo.
              </p>
            </span>
          </div>
          <br />
          <div
            class="w-full md:w-full lg:w-[500px] lg:mx-2 about-background"
          ></div>
        </div>
      </div>
    </section>
    <section id="powered" class="relative overflow-hidden bg-black">
      <div class="flex justify-center text-white bg-black-light">
        <div class="flex items-center py-2 mx-2">
          <img
            class="w-[100px] lg:w-max-[200px]"
            :src="alfredoRojas"
            alt="alfredo-rojas"
          />
        </div>
        <div class="flex items-center py-2 mx-2">
          <img class="w-[100px] lg:w-max-[200px]" :src="tv" alt="ar-tv" />
        </div>
        <div class="flex items-center py-2 mx-2">
          <a href="https://notiarve.com/" target="_blank">
            <img class="w-[100px] lg:w-max-[200px]" :src="notiAr" alt="ar-tv" />
          </a>
        </div>
      </div>
    </section>
    <section id="available"></section>
  </Layout>
</template>
<style>
.player iframe {
  min-width: 100%;
  height: 400px;
}
.about-background {
  background-image: url("@/assets/img/about-ar-stereo.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 350px;
}
</style>
