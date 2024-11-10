<script setup>
import { defineProps } from "vue";
import Article from "@/components/Articles/Articles.vue";
const props = defineProps({
  articles: Array,
});
defineComponent({
  name: "ArticleListComponent",
});
</script>

<template>
  <div
    class="flex justify-around p-5 bg-white-mark"
    v-bind:key="article"
    v-for="article in props.articles"
  >
    <Article class="" :article="article" />
  </div>
</template>
<style></style>
