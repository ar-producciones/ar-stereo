<script setup>
  defineProps({
    lastArticle: {
      type: Object,
      default: () => ({})
    }
  })
</script>
<template>
  <section>
    <div class="flex flex-col sm:w-[300px] md:w-[700px] lg:w-[750px] mt-5">
      <template v-if="lastArticle && lastArticle.title">
        <h4 class="my-5 text-xl font-bold md:text-3xl hover:text-gold">
          <a :href="lastArticle.url" target="_blank">{{ lastArticle.title }}</a>
        </h4>
        <a :href="lastArticle.url" target="_blank">
          <img
            v-if="lastArticle.mediaUrl"
            class="rounded-t-md h-[200px] w-[300px] md:w-full md:h-[400px] lg:h-[500px] lg:w-full"
            :src="lastArticle.mediaUrl"
            :alt="lastArticle.title"
          />
        </a>

        <span class="mt-2 text-xs text-gray-600 font-montserrat">
          Autor: {{ lastArticle.author }}
        </span>
        <p class="text-xs text-gray-600 font-montserrat">
          Publicado: {{ new Date(lastArticle.date).toLocaleString() }}
        </p>

        <p class="py-4 text-lg text-justify indent-8">
          {{ lastArticle.content }}
        </p>

        <!-- Botón -->
        <div class="flex justify-end">
          <ButtonLink
            class="flex"
            value="Leer más..."
            theme="gold"
            size="sm"
            :url="lastArticle.url"
          />
        </div>
      </template>

      <template v-else>
        <USkeleton class="w-full h-10 my-8" />

        <USkeleton
          class="w-full my-1 rounded rounded-t-md h-[200px] w-[300px] md:w-full md:h-[400px] lg:h-[500px] lg:w-full"
        />

        <USkeleton class="w-1/2 h-4 mb-2" />
        <USkeleton class="w-1/2 h-4 mb-2" />

        <div class="w-full mt-4">
          <USkeleton class="w-full h-4 mb-2" />
          <USkeleton class="w-full h-4 mb-2" />
          <USkeleton class="w-full h-4 mb-2" />
          <USkeleton class="w-full h-4 mb-2" />
        </div>
        <div class="flex justify-end">
          <USkeleton class="self-end w-32 h-12 mt-4" />
        </div>
      </template>
    </div>
  </section>
</template>
