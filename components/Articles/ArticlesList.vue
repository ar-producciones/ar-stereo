<script setup>
  import { defineProps } from 'vue'
  import Article from '@/components/Articles/Articles.vue'

  defineProps({
    articles: { type: Array, default: () => [] },
    title: { type: String, default: '' }
  })
  defineComponent({
    name: 'ArticleListComponent'
  })
</script>

<template>
  <section v-if="articles[0]" class="w-[323px] pt-16 mt-2 md:w-full">
    <h4 class="italic font-black lg:flex md:w-full lg:w-[100px]">
      {{ title }}
    </h4>
    <div
      v-for="article in articles"
      :key="article"
      class="bg-white-mark md:w-full lg:flex lg:justify-end"
    >
      <Article :article="article" />
    </div>
  </section>
  <section v-else class="w-[323px] pt-16 mt-2 md:w-full">
    <h4 class="italic font-black lg:flex md:w-full lg:w-[100px]">
      {{ title }}
    </h4>
    <div class="flex-col bg-white-mark md:w-full lg:flex lg:justify-end">
      <div v-for="index in 3" :key="index" class="article-section">
        <USkeleton
          class="rounded-t-md h-[200px] w-[300px] md:w-full md:h-[400px] lg:h-[200px] lg:w-[280px]"
        />
        <USkeleton class="w-1/2 h-4 my-2" />
        <USkeleton class="w-1/2 h-4 my-2" />
        <USkeleton class="w-full h-8 my-8" />
      </div>
    </div>
  </section>
</template>
