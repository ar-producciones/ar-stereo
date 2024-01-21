<script>
import Layout from "../../components/Layout.vue";

const banner = require("../../assets/img/banner.jpg");
const tvDigital = require("../../assets/img/tv-digital.png");
const notiAr = require("../../assets/img/noti-ar.png");
export default {
  name: "HomeComponent",
  components: { Layout },
  data: () => {
    return {
      banner,
      tv: tvDigital,
      notiAr,
    };
  },
  methods: {},
};
</script>
<template>
  <Layout>
    <section id="" class="bg-black overflow-hidden relative">
      <div class="bg-black-light flex justify-center text-white">
        <div class="py-2 flex items-center mx-2">
          <img class="w-[150px] lg:w-[250px]" :src="tv" alt="ar-tv" height="250" />
        </div>
        <div class="py-2 flex items-center mx-2">
          <img class="w-[150px] lg:w-[250px]" :src="notiAr" alt="ar-tv" height="250" />
        </div>
      </div>
    </section>
    <section id="home" class="h-screen bg-black overflow-hidden relative">
      <div class="flex justify-center py-8 my-2 h-100">
        <figure class="flex-col w-[350px] lg:w-[600px]">
          <img
            class="w-[350px] lg:w-[600px]"
            src="../../assets/img/banner.jpg"
            alt="ar-stereo"
          />
          <audio controls class="rounded-md bg-gray-100 w-[350px] lg:w-[600px]">
            <source src="https://sonic.cloudstreaming.eu/8036/stream" type="" />
          </audio>
        </figure>
      </div>
    </section>
  </Layout>
</template>
