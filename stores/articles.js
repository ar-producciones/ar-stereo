import { defineStore } from 'pinia';

export const useArticlesStore = defineStore('articles', {
    state: () => ({
        articles: [],
    }),
    actions: {
        setArticles(articles) {
            this.articles = articles
            return this.articles
        }
    },
    getters: {
        articlesList: (state) => state.articles
    },
})