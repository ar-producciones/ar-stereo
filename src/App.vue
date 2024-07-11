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
import {
    useMeta
} from "vue-meta";
import liveImage from "@/assets/img/live-stream.jpg"
const AR_STEREO = "AR Stereo"
const DESCRIPTION = `
    Ar Stereo "Latiendo con tu música Latina". Todos los géneros musicales suenan en: Tu Radio www.arstereo.com.
    Conectate dónde quiera que estés ...!
`
export default {
    name: "App",
    setup() {
        useMeta({
            title: AR_STEREO,
            description: DESCRIPTION,
            og: {
                url: "https://www.arstereo.com",
                type: "Radio Online",
                title: AR_STEREO,
                description: DESCRIPTION,
                image: liveImage
            }
        });
    },
};
</script>
