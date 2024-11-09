<script setup>
import logo from "~/assets/img/banner.png";
import DownloadButton from "@/components/ButtonLink.vue";
import { BIconGooglePlay, BIconApple } from "bootstrap-icons-vue";
import { ESLOGAN } from "../common/constants.js";
defineComponent({
  name: "DownloadAppComponent",
});
const description = computed(() => {
  return "Descargala en";
});
</script>
<template>
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
          {{ ESLOGAN }}
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
</template>
