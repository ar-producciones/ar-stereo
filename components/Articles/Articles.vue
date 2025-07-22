<script setup>
  import { defineProps } from 'vue'
  defineProps({
    article: {
      type: Object,
      default: () => ({
        id: 0,
        title: '',
        url: '',
        mediaUrl: '',
        author: '',
        date: new Date().toISOString()
      })
    }
  })
</script>

<script>
  export default {
    name: 'ArticleComponent'
  }
</script>
<template>
  <section class="rounded-md w-[300px] md:w-[600px] lg:w-[280px]">
    <div>
      <a :href="article.url" target="_blank">
        <img
          class="rounded-t-md h-[200px] w-[300px] md:w-full md:h-[400px] lg:h-[200px] lg:w-[280px]"
          :src="article.mediaUrl"
          :alt="article.title"
        />
      </a>
    </div>
    <div class="py-2">
      <span class="text-xs text-gray-600 font-montserrat">Autor: {{ article.author }}</span>
      <p class="text-xs text-gray-600 font-montserrat">
        Publicado:
        {{ new Date(article.date).toLocaleString() }}
      </p>
      <br />
      <h5 class="text-sm font-bold font-montserrat hover:text-gold">
        <a :href="article.url" target="_blank">{{ article.title }}</a>
      </h5>
    </div>
  </section>
</template>
