<script setup lang="ts">
import { ABOUT_TEXT, ESLOGAN, VISION } from "~/common/constants";
import { useTeam } from "~/features/about/composables/useTeams";
import { ref } from "vue";
import type { CardImage } from "~/components/CardImage/CardImage";
const team = ref<CardImage[]>([]);
const { getTeam } = useTeam();

team.value = (await getTeam()) as unknown as CardImage[];
</script>
<template>
  <section
    class="w-full bg-center bg-no-repeat bg-cover h-64 md:h-64 lg:h-[450px] bg-[url('/cover-arstereo.jpg')]"
  >
    <div
      class="flex items-center justify-center w-full h-full bg-black/30 backdrop-blur-sm"
    >
      <h1
        class="p-4 text-6xl italic text-white font-extralight md:p-16 lg:text-7xl"
      >
        {{ ESLOGAN }}
      </h1>
    </div>
  </section>
  <!-- About section -->
  <section
    class="flex flex-col justify-center w-full bg-black lg:px-10 lg:flex-row"
  >
    <div class="items-center justify-center hidden p-8 md:flex lg:p-0">
      <img
        src="../assets/img/banner.png"
        alt="Ar Stereo"
        class="w-2/3 md:w-2/5 md:m-10 lg:w-[376px]"
      />
    </div>
    <div
      class="flex flex-col justify-between py-8 text-white bg-black lg:w-[845px]"
    >
      <h1 class="p-8 mx-8 text-5xl italic font-bold text-gold">AR Stereo</h1>
      <div
        class="flex flex-col justify-around m-8 sm:flex-col md:flex-col lg:flex-row"
      >
        <div
          class="text-2xl italic text-justify text-gray-300 md:indent-8 lg:mx-2"
        >
          <p class="w-max-[300px] md:w-full lg:w-max-[400px]">
            {{ ABOUT_TEXT }}
          </p>
          <h2
            class="p-8 mx-8 text-3xl italic font-bold text-gold font-montserrat"
          >
            Nuestra Vision
          </h2>
          <p class="w-max-[600px] md:w-full indent-8">
            {{ VISION }}
          </p>
        </div>
      </div>
    </div>
  </section>
  <!-- Our Teams -->
  <section v-if="false" class="flex justify-center w-full pb-5 text-black bg-white">
    <div class="flex flex-col justify-center w-2/3 h-auto lg:w-[1200px]">
      <h3 class="p-8 italic font-bold text-center">Nuestro Equipo</h3>
      <div class="flex justify-between p-10 md:p-10">
        <CardImage :items="team" />
      </div>
    </div>
  </section>
</template>
