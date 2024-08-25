<script setup>
import { onMounted, computed, defineComponent } from "vue";
import { useStore } from "vuex";
import Layout from "@/components/Layout.vue";
import Carousel from "@/components/Carousel.vue";
import DownloadButton from "@/components/ButtonLink.vue";
import ArticleListComponent from "@/components/Articles/ArticlesListComponent.vue";
import "vue3-carousel/dist/carousel.css";
import { BIconGooglePlay, BIconApple } from "bootstrap-icons-vue";
import NotiArVe from "@/api/notiarv-api";

// Instancia de la API
const notiarv = new NotiArVe();

// Array de imágenes
import tvDigital from "@/assets/img/tv-digital.png";
import notiAr from "@/assets/img/noti-ar.png";
import alfredoRojas from "@/assets/img/alfredo-rojas.png";
import logo from "@/assets/img/banner.png";
import alfredoRojasImage from "@/assets/img/alfredo-rojas.jpg";
import marianaCamachoImage from "@/assets/img/mariana-camacho.jpg";
import jesusChaminCastroImage from "@/assets/img/jesus-chamin-castro.jpg";
import neomarCepedaImage from "@/assets/img/neomar-cepeda.jpg";
import edgarPetitImage from "@/assets/img/edgar-petit.jpg";

const images = [
  { id: 1, name: "Alfredo Rojas", url: alfredoRojasImage },
  { id: 2, name: "Mariana Camacho", url: marianaCamachoImage },
  { id: 3, name: "Jesus Chamin Castro", url: jesusChaminCastroImage },
  { id: 4, name: "Neomar Cepeda", url: neomarCepedaImage },
  { id: 5, name: "Edgar Petit", url: edgarPetitImage },
];

// Estado y métodos
const description = "Descargala en";
const store = useStore();

const getArticles = async () => {
  try {
    const response = await notiarv.getArticles();
    store.commit("setArticles", response);
  } catch (error) {
    console.error("Error fetching articles:", error);
  }
};

onMounted(() => {
  getArticles();
});

const articles = computed(() => store.state.articles);
defineComponent({
  name: "HomeCompoment",
});
</script>
<template>
  <Layout>
    <section id="carousel" class="relative h-auto overflow-hidden bg-black">
      <Carousel class="h-[800px]" :images="images" />
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

    <section class="">
      <div
        class="flex text-white bg-black-light md:justify-center lg:justify-center"
      >
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
                size="sm"
                :icon="BIconGooglePlay"
              >
                <BIconGooglePlay class="text-2xl" />
              </DownloadButton>
              <DownloadButton
                theme="dark"
                :description="description"
                store="apple"
                value="Apple Store"
                size="sm"
                :icon="BIconApple"
              >
                <BIconApple class="text-2xl" />
              </DownloadButton>
            </div>
          </div>
        </div>
      </div>
      <section id="news" class="h-auto bg-white">
        <h3 class="p-5 text-center">Ultimas Noticias</h3>
        <div class="flex flex-wrap justify-center h-auto p-5">
          <ArticleListComponent :articles="articles" />
        </div>
      </section>
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
  </Layout>
</template>

<style scoped>
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
