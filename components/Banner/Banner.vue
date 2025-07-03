<script setup lang="ts">
import notiarve from "../../assets/img/noti-ar.png";
</script>
<template>
  <span
    class="flex items-center w-full h-[110px] p-2 justify-between md:justify-normal lg:max-w-[1350px] m-auto mt-2 bg-[#d9d9d9]"
  >
    <div>
      <img :src="notiarve" alt="Noti AR" width="120" />
    </div>
    <a href="https://www.google.com" target="_blank" class="p-2 mr-5 w-full">
      <div class="hover:cursor-pointer w-full px-2">
        <h4 class="text-lg italic font-black">
          Siguenos tambien en Noti AR Ve
        </h4>
        <p class="text-sm italic">
          Enterate en todo momento de lo ultimo tendencia
        </p>
      </div>
    </a>
  </span>
</template>
