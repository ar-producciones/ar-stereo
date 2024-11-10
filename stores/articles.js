import { defineStore } from 'pinia';

export const useArticlesStore = defineStore('articles', {
    state: () => ({
        articles: [],
        lastArticle: {
            title: "",
            mediaUrl: "",
            url: "",
            content: ""
        }
    }),
    actions: {
        setArticles(articles) {
            this.articles = articles
            return this.articles
        },
        setLastArticle(article) {
            this.lastArticle = article
            return this.lastArticle
        }
    },
    getters: {
        articlesList: (state) => state.articles,
        getLastArticle: (state)=>state.lastArticle
    },
})