import { createApp } from 'vue'
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';
import App from './App.vue'
import router from './router/index';
import './assets/css/tailwind.css';

const app = createApp(App)
app.use(BootstrapIconsPlugin);
app.use(router)
app.mount('#app')