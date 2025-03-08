<script setup lang="ts">
import alfredoRojas from "@/assets/img/alfredo-rojas.png";
import {
  BIconFacebook,
  BIconInstagram,
  BIconWhatsapp,
} from "bootstrap-icons-vue";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

defineComponent({
  name: "FooterComponent",
});

defineProps({
  navigation: {
    type: Array as () => NavigationItem[],
    required: true,
  },

  alliedPrograms: {
    type: Array as () => NavigationItem[],
    required: true,
  },
});
</script>

<template>
  <footer class="footer">
    <section class="footer-section">
      <div class="column">
        <h5 class="title">MENU</h5>
        <ul class="item" v-for="item in navigation" :key="item.name">
          <li>
            <a :key="item.name" :href="item.href">{{ item.name }}</a>
          </li>
        </ul>
      </div>
      <div class="column">
        <h5 class="title">PROGRAMAS ALIADOS</h5>
        <ul class="item" v-for="item in alliedPrograms" :key="item['name']">
          <li>
            <a :key="item.name" :href="item.href">{{ item.name }}</a>
          </li>
        </ul>
      </div>
      <div class="column">
        <h5 class="title">REDES SOCIALES</h5>
        <div class="flex py-2 uppercase">
          <ul class="m-2">
            <li>
              <a
                href="https://www.facebook.com/people/AR-Stereo-Oficial/100083274582169/"
                target="_blank"
              >
                <BIconFacebook class="text-2xl hover:text-gold"
              /></a>
            </li>
          </ul>
          <ul class="m-2">
            <li>
              <a
                href="https://www.instagram.com/arstereooficiall/"
                target="_blank"
              >
                <BIconInstagram class="text-2xl hover:text-gold"
              /></a>
            </li>
          </ul>
          <ul class="m-2">
            <li>
              <a href="https://wa.link/xkbjn8" target="_blank">
                <BIconWhatsapp class="text-2xl hover:text-gold"
              /></a>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="flex flex-col items-center col-span-1 md:col-span-4 lg:col-span-1 column"
      >
        <h5 class="mark">Producto con el sello oficial de Alfredo Rojas.</h5>
        <div class="flex items-center py-2 mx-2">
          <img
            class="w-[150px] lg:w-max-[200px]"
            :src="alfredoRojas"
            alt="alfredo-rojas"
          />
        </div>
      </div>
    </section>
    <section class="px-2 bg-black text-gold lg:px-40">
      <p class="flex justify-center py-6">
        &copy; {{ new Date().getFullYear() }} AR Stereo &reg;
      </p>
    </section>
  </footer>
</template>
<style scoped>
.title {
  @apply font-bold;
}
.footer {
  @apply bg-black;
}
.footer-section {
  @apply max-w-screen-xl bg-black grid gap-1 m-auto p-1 grid-cols-1  md:grid-cols-3 md:gap-2 lg:gap-4 lg:grid-cols-4;
}

.column {
  @apply text-white p-4 uppercase;
}
.item {
  @apply my-4 hover:text-gold;
}
.mark {
  text-transform: none;
  text-align: center;
}
</style>
