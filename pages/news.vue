<script setup lang="ts">
import { ABOUT_TEXT, CANONICAL_URL, ESLOGAN } from "../common/constants";
import ArticlesList from "../components/Articles/ArticlesList.vue";
import LastArticle from "../components/Articles/LastArticle.vue";

import { useNews } from "../features/news/composables/useNews";

import type { Articles } from "../features/news/data/news.interface";

const articlesData = ref<Articles[]>();
const lastArticle = ref<Articles>();
const aboutImage = "about-ar-stereo.jpg";

useSeoMeta({
  title: `AR Stereo | ${ESLOGAN}`,
  ogTitle: `AR Stereo | ${ESLOGAN}`,
  description: ABOUT_TEXT,
  ogDescription: ABOUT_TEXT,
  ogImage: `${CANONICAL_URL}${aboutImage}`,
  ogImageAlt: "AR Stereo",
  ogType: "website",
  twitterCard: "summary_large_image",
});
const { getArticles } = useNews();
onMounted(async () => {
  const articles = await getArticles();
  if (articles && articles.length > 0) {
    const lastArt = articles.shift() as Articles;
    lastArticle.value = {
      ...lastArt,
      content: lastArt.content.replace(/<\/?[^>]+(>|$)/gi, ""),
    };
    articlesData.value = {
      ...articles,
    };
  }
});
</script>
<template>
  <section id="news" class="flex flex-col h-auto p-8 text-black bg-white-mark">
    <h3 class="px-2 italic text-center">Ultimas Noticias</h3>

    <div class="flex flex-col justify-evenly md:flex-col lg:flex-row">
      <div class="flex flex-col justify-between">
        <LastArticle :last-article="lastArticle" />
      </div>

      <div class="flex flex-col flex-wrap h-auto p-5">
        <ArticlesList
          :articles="articlesData"
          title="Publicaciones Recientes"
        />
      </div>
    </div>
    <Banner />
  </section>
</template>
