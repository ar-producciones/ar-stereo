import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home/Home.vue';
const routes = [
  {
    path: '/',
    name: '',
    component: Home,
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router