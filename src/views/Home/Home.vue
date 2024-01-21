<script>
import Layout from "../../components/Layout.vue";

const banner = require("../../assets/img/banner.svg");
const logo = require("../../assets/img/logo.png");
const tvDigital = require("../../assets/img/tv-digital.png");
const notiAr = require("../../assets/img/noti-ar.png");
export default {
  name: "HomeComponent",
  components: { Layout },
  data: () => {
    return {
      banner,
      logo,
      tv: tvDigital,
      notiAr
    };
  },
  methods: {},
};
</script>
<template>
  <Layout>
    <section id="" class=" bg-black overflow-hidden relative">
      <div class="bg-black-light flex justify-center text-white">
        <div class="py-2 flex items-center">
          <img :src="tv" alt="ar-tv" width="250" height="250" />
        </div>
        <div class="py-2 flex items-center">
          <img :src="notiAr" alt="ar-tv" width="250" height="250" />
        </div>
      </div>
    </section>
    <section id="home" class="h-screen bg-black overflow-hidden relative">
      <div class="flex justify-center py-8 my-2 h-100">
        <figure class="flex-col">
          <img src="../../assets/img/banner.svg" alt="ar-stereo" width="600" />
          <audio controls class="rounded-md bg-gray-100 w-[600px]">
            <source src="https://sonic.cloudstreaming.eu/8036/stream" type="" />
          </audio>
        </figure>
      </div>
    </section>
  </Layout>
</template>
