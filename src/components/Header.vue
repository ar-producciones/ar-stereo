<template>
  <div
    class="flex items-center justify-between w-full px-40 text-white bg-black"
  >
    <div class="flex items-center py-4">
      <img :src="logo" alt="alfredo-rojas" width="150" height="200" />
      <h4 class="hidden font-semibold font-montserrat lg:mx-2 lg:flex">
        AR Stereo
      </h4>
    </div>
    <div class="flex">
      <div
        class="uppercase hover:text-gold"
        v-for="item in menuItems"
        :key="item.id"
      >
        <ul class="m-2" v-if="menuItems.some">
          <li>
            <a :href="item.url">{{ item.name }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
const logo = require("../assets/img/banner.png");

export default {
  name: "HeaderComponent",
  data() {
    return {
      logo: logo,
      test: "Header",
      menuItems: [
        {
          name: "Inicio",
          url: "/#home",
        },
        /*  {
          name: "Contacto",
          url: "/#contact",
        }, */
        {
          name: "Acerca de",
          url: "/#about",
        },
      ],
    };
  },
  methods: {},
};
</script>
