<script setup>
import { computed, defineComponent, defineProps } from "vue";
import { ANDROID_STORE_URL, APPLE_STORE_URL } from "../common/constants";
defineComponent({
  name: "ButtonLinkComponent",
});

const props = defineProps({
  size: { type: String, required: true, default: "sm" },
  store: { type: String },
  theme: { type: String, default: "dark" },
  description: { type: String },
  value: { type: String },
  icon: { type: Object },
  url: { type: String },
});

const btnStyle = computed(() => ({
  "btn-dark": props.theme === "dark" ? true : false,
  "btn-light": props.theme === "light" ? true : false,
  "btn-gold": props.theme === "gold" ? true : false,
  "btn-sm": props.size === "sm" ? true : false,
}));

const link = computed(() => {
  if (!props.store) {
    return props.url;
  }
  return props.store === "android" ? ANDROID_STORE_URL : APPLE_STORE_URL;
});
</script>

<template>
  <a :href="link" class="btn" :class="btnStyle" target="_blank">
    <span class="icon-box"><slot></slot></span>
    <span class="flex flex-col items-start">
      <span class="text-sm">{{ description }}</span>
      <span class="font-bold"> {{ value }}</span>
    </span>
  </a>
</template>

<style scoped>
.icon-box {
  margin: 10px;
  padding: 5px;
}
.btn {
  display: flex;
  border-radius: 5px;
  place-items: center;
  margin: 10px;
}
.btn-dark {
  background-color: black;
  color: white;
  border: 1px solid grey;
}

.btn-gold {
  background-color: goldenrod;
  color: black;
  border: 1px solid goldenrod;
}
.btn-light {
  background-color: white;
  color: black;
  border: 1px solid grey;
}
.btn-sm {
  width: 200px;
  height: 50px;
}
</style>
