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
  <div
    class="rounded-md w-[300px] lg:w-[280px] shadow-2xl hover:scale-125 hover:my-4"
  >
    <div>
      <img
        class="rounded-t-md h-[200px] w-[300px] lg:w-[280px] hover:w-full hover:h-fit"
        :src="props.article.mediaUrl"
        :alt="props.article.title"
      />
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
