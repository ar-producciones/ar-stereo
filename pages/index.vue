<script setup>
import Carousel from "@/components/Carousel.vue";
import Player from "@/components/Player.vue";
import DownloadApp from "@/components/DownloadApp.vue";
import ArticleList from "@/components/Articles/ArticlesList.vue";
import { ESLOGAN, ABOUT_TEXT, CANONICAL_URL } from "@/common/constants.js";
import NotiArVe from "@/api/notiarve-api.js";

// Array de imágenes
import tvDigital from "@/assets/img/tv-digital.png";
import notiAr from "@/assets/img/noti-ar.png";
import alfredoRojas from "@/assets/img/alfredo-rojas.png";

import alfredoRojasImage from "../assets/img/alfredo-rojas.jpg";
import marianaCamachoImage from "../assets/img/mariana-camacho.jpg";
import jesusChaminCastroImage from "../assets/img/jesus-chamin-castro.jpg";
import neomarCepedaImage from "../assets/img/neomar-cepeda.jpg";
import edgarPetitImage from "../assets/img/edgar-petit.jpg";
import { useArticlesStore } from "@/stores/articles";
const aboutImage = "about-ar-stereo.jpg";

const images = computed(() => {
  return [
    { id: 1, name: "Alfredo Rojas", url: alfredoRojasImage },
    { id: 2, name: "Mariana Camacho", url: marianaCamachoImage },
    { id: 3, name: "Jesus Chamin Castro", url: jesusChaminCastroImage },
    { id: 4, name: "Neomar Cepeda", url: neomarCepedaImage },
    { id: 5, name: "Edgar Petit", url: edgarPetitImage },
  ];
});

// Instancia de la API
const notiarv = new NotiArVe();
useSeoMeta({
  title: `AR Stereo | ${ESLOGAN}`,
  ogTitle: `AR Stereo | ${ESLOGAN}`,
  description: ABOUT_TEXT,
  ogDescription: ABOUT_TEXT,
  ogImage: `${CANONICAL_URL}${aboutImage}`,
  ogImageAlt: "AR Stereo",
  ogType: "website",
  twitterCard: "summary_large_image",
});

//const store = useStore();
const articleStore = useArticlesStore();
const getArticles = async () => {
  try {
    const response = await notiarv.getArticles();
    articleStore.setArticles(response);
  } catch (error) {
    console.error("Error fetching articles:", error);
  }
};
const articlesData = computed(() => articleStore.articles);

onMounted(() => {
  getArticles();
});
</script>

<template>
  <div class="w-full">
    <section id="carousel" class="relative h-auto overflow-hidden bg-black">
      <Carousel class="h-[800px]" :images="images" />
    </section>
    <section id="home" class="relative overflow-hidden bg-black">
      <Player />
    </section>
    <DownloadApp />
    <section id="news" class="h-auto bg-white">
      <h3 class="p-5 text-center">Ultimas Noticias</h3>
      <div class="flex flex-wrap justify-center h-auto p-5">
        <ArticleList :articles="articlesData" />
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
              {{ ABOUT_TEXT }}
            </p>
            <h2 class="p-8 mx-8 text-3xl italic text-gold font-montserrat">
              Nuestra Vision
            </h2>
            <p class="w-max-[600px] md:w-[600px] indent-8">
              Tenemos la visión de llegar a los diferentes estratos de audiencia
              a nivel mundial siendo nuestra prioridad el público latino en todo
              el mundo.
            </p>
          </div>
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
          <img
            class="w-[100px] lg:w-max-[200px]"
            :src="tvDigital"
            alt="ar-tv"
          />
        </div>
        <div class="flex items-center py-2 mx-2">
          <a href="https://notiarve.com/" target="_blank">
            <img
              class="w-[100px] lg:w-max-[200px]"
              :src="notiAr"
              alt="notiarve"
            />
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>
.about-background {
  background-image: url("/about-ar-stereo.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 350px;
}
</style>
