import type { Articles } from "../data/news.interface";

export function useNews() {
  async function getArticles(): Promise<Articles[]> {
    return await $fetch("/api/news");
  }
  return { getArticles };
}
