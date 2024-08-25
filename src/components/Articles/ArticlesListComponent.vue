<script setup>
import { defineProps } from "vue";
import ArticleComponent from "@/components/Articles/ArticleComponent.vue";
const props = defineProps({
  articles: Array,
});
</script>
<script>
export default { name: "ArticleListComponent" };
</script>
<template>
  <div
    class="flex justify-around p-5"
    v-bind:key="article"
    v-for="article in props.articles"
  >
    <ArticleComponent class="" :article="article" />
  </div>
</template>
<style></style>
