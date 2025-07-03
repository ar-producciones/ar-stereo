<script setup lang="ts">
import type { ItemsProps } from "./CardImage.d.ts";
const props = defineProps<ItemsProps>();
const imagesContainer = computed(() => ({
  "relative overflow-hidden size-[200px] rounded-lg":
    !props.size || props.size === "md" ? true : false,
  "relative overflow-hidden size-[100px] rounded-lg":
    props.size === "sm" ? true : false,
}));
const nameImages = computed(() => ({
  "relative z-20 text-xl font-bold text-center text-white":
    !props.size || props.size === "md" ? true : false,
  "relative z-20 text-sm font-bold text-center text-white":
    props.size === "sm" ? true : false,
}));
</script>

<template>
  <section class="flex flex-wrap gap-7.5">
    <div
      v-for="item in items"
      :key="item.id"
      class="relative flex flex-col cursor-pointer h-fit"
    >
      <div :class="imagesContainer">
        <div
          class="absolute top-0 left-0 z-10 flex items-center justify-center w-full h-full transition-opacity duration-300 ease-in-out bg-black bg-opacity-50 opacity-0 hover:opacity-80"
        >
          <p :class="nameImages" class="hover:opacity-100">{{ item.name }}</p>
        </div>
        <img
          :src="item.image"
          :alt="item.name"
          class="absolute top-0 left-0 object-cover w-full h-full"
        />
      </div>
    </div>
  </section>
</template>
