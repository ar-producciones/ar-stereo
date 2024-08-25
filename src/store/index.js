import { createStore } from 'vuex';
export default createStore({
  state() {
    return {
      articles: [],
    };
  },
  mutations: {
    setArticles(state, articles) {
      state.articles = articles;
    }
  },
  actions: {
  },
  getters: {
    articles: state => state.articles
  }
});
