<template>
  <metainfo>
    <template v-slot:title="{ content }">{{
      content
        ? `${content} | Latiendo con tu música Latina...`
        : `ar-stereo.com`
    }}</template>
  </metainfo>
  <router-view />
</template>

<script lang="es">
import { useMeta } from "vue-meta";
export default {
  name: "App",
  setup() {
    useMeta({
      title: "AR Stereo",
      description: `
      Conectate dónde tú estés ...!
      Ar Stereo "Latiendo con tu música Latina". Todos los géneros musicales suenan en: Tu Radio ar-stereo.com.`,
      htmlAttrs: { lang: 'es', amp: true },
    });
  },
};
</script>
