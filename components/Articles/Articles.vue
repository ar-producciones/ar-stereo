<script setup>
import { defineProps } from "vue";
const props = defineProps({
  article: { id: Number, title: String },
});
</script>

<script>
export default {
  name: "ArticleComponent",
};
</script>
<template>
  <div class="rounded-md w-[300px] md:w-[600px] lg:w-[280px]">
    <div>
      <a :href="props.article.url" target="_blank"
        ><img
          class="rounded-t-md h-[200px] w-[300px] md:w-[600px] md:h-[400px] lg:h-[200px] lg:w-[280px]"
          :src="props.article.mediaUrl"
          :alt="props.article.title"
      /></a>
    </div>
    <div class="p-3">
      <span class="text-xs text-gray-600 font-montserrat"
        >Autor: {{ props.article.author }}</span
      >
      <p class="text-xs text-gray-600 font-montserrat">
        Publicado:
        {{ new Date(props.article.date).toLocaleString() }}
      </p>
      <br />
      <h5 class="text-sm font-bold font-montserrat hover:text-gold">
        <a :href="props.article.url" target="_blank">{{
          props.article.title
        }}</a>
      </h5>
    </div>
  </div>
</template>
<style></style>
