<template>
    <div
      class="bg-black w-full text-white px-40 flex justify-between items-center"
    >
      <div class="py-4 flex items-center">
        <img :src="logo" alt="alfredo-rojas" width="150" height="200" />
        <h4 class="font-montserrat font-semibold" >AR Stereo</h4>
      </div>
      <div class="flex">
        <div class="uppercase" v-for="item in menuItems" :key="item.id">
          <ul class="m-2" v-if="menuItems.some ">
            <li>{{ item.name }}</li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  <script>
  const logo = require('../assets/img/logo.png');
  
  export default {
    name: 'HeaderComponent',
    data() {
      return {
        logo: logo,
        test: 'Header',
        menuItems: [

        ],
      };
    },
    methods: {},
  };
  </script>
  