<script setup lang="ts">
import { useRouter } from "vue-router"; // Importar useRouter
import alfredoRojas from "@/assets/img/alfredo-rojas.png";
import {
  BIconFacebook,
  BIconInstagram,
  BIconWhatsapp,
} from "bootstrap-icons-vue";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean; // Ya no usaremos esta propiedad
}

const router = useRouter(); // Obtener el enrutador

// Define props for the component
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

// Método para navegar programáticamente
const navigateTo = (href: string) => {
  router.push(href); // Navegar a la ruta proporcionada
};

// Función para verificar si la página es la actual
const isCurrentPage = (href: string): boolean => {
  return router.currentRoute.value.path === href;
};
</script>

<template>
  <footer class="bg-black">
    <section
      class="max-w-screen-xl bg-black grid gap-1 m-auto p-1 grid-cols-1 md:grid-cols-3 md:gap-2 lg:gap-4 lg:grid-cols-4"
    >
      <div class="text-white p-4 uppercase">
        <h5 class="font-bold">MENU</h5>
        <ul class="my-4" v-for="item in navigation" :key="item.name">
          <li>
            <!-- Usamos isCurrentPage para determinar si estamos en la página actual -->
            <a
              @click="navigateTo(item.href)"
              :class="{
                'text-gold': isCurrentPage(item.href), // Página actual
                'hover:text-gold hover:cursor-pointer': !isCurrentPage(
                  item.href
                ), // Hover en otros enlaces
                'text-white': !isCurrentPage(item.href), // Color base para los demás
              }"
            >
              {{ item.name }}
            </a>
          </li>
        </ul>
      </div>
      <div class="text-white p-4 uppercase">
        <h5 class="font-bold">PROGRAMAS ALIADOS</h5>
        <ul class="my-4" v-for="item in alliedPrograms" :key="item['name']">
          <li>
            <!-- Usamos isCurrentPage para determinar si estamos en la página actual -->
            <a
              @click="navigateTo(item.href)"
              :class="{
                'text-gold': isCurrentPage(item.href), // Página actual
                'hover:text-gold hover:cursor-pointer': !isCurrentPage(
                  item.href
                ), // Hover en otros enlaces
                'text-white': !isCurrentPage(item.href), // Color base para los demás
              }"
              class=""
            >
              {{ item.name }}
            </a>
          </li>
        </ul>
      </div>
      <div class="text-white p-4 uppercase">
        <h5 class="font-bold">REDES SOCIALES</h5>
        <div class="flex py-2 uppercase">
          <ul class="m-2">
            <li>
              <a
                class="hover:text-gold hover:cursor-pointer"
                href="https://www.facebook.com/people/AR-Stereo-Oficial/100083274582169/"
                target="_blank"
              >
                <BIconFacebook class="text-2xl hover:text-gold" />
              </a>
            </li>
          </ul>
          <ul class="m-2">
            <li>
              <a
                class="hover:text-gold hover:cursor-pointer"
                href="https://www.instagram.com/arstereooficiall/"
                target="_blank"
              >
                <BIconInstagram class="text-2xl hover:text-gold" />
              </a>
            </li>
          </ul>
          <ul class="m-2">
            <li>
              <a
                class="hover:text-gold hover:cursor-pointer"
                href="https://wa.link/xkbjn8"
                target="_blank"
              >
                <BIconWhatsapp class="text-2xl hover:text-gold" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="flex flex-col items-center col-span-1 md:col-span-4 lg:col-span-1 column lg:flex-col-reverse"
      >
        <h5 class="text-white text-center font-extralight">
          Este producto cuenta con el sello oficial de Alfredo Rojas, símbolo de
          calidad y excelencia.
        </h5>
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

<style scoped></style>
