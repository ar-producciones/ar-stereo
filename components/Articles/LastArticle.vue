<template>
  <div>
    <div class="flex flex-col sm:w-[300px] md:w-[700px] lg:w-[800px] mt-5">
      <h4 class="font-bold font-montserrat hover:text-gold my-5">
        <a :href="lastArticle.url" target="_blank">{{ lastArticle.title }}</a>
      </h4>
      <a :href="lastArticle.url" target="_blank"
        ><img
          class="rounded-t-md h-[500px] w-[800px]"
          :src="lastArticle.mediaUrl"
          :alt="lastArticle.title"
      /></a>

      <span class="text-xs text-gray-600 font-montserrat"
        >Autor: {{ lastArticle.author }}</span
      >
      <p class="text-xs text-gray-600 font-montserrat">
        Publicado:
        {{ new Date(lastArticle.date).toLocaleString() }}
      </p>
      <p class="py-4 text-lg indent-8 text-justify">
        {{ lastArticle.content }}
      </p>
      <br />
      <div class="flex justify-end">
        <ButtonLink
          class="flex"
          value="Leer mas..."
          theme="gold"
          :url="lastArticle.url"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
defineComponent({
  name: "LastArticleComponent",
});
defineProps({
  lastArticle: Object,
});
</script>
