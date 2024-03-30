
import  {createApp} from 'vue'
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';

import App from './App.vue'
import router from './router/index';
import './assets/css/tailwind.css';
import {createMetaManager} from 'vue-meta';
const app = createApp(App)

app.use(BootstrapIconsPlugin);
app.use(router)
app.use(createMetaManager())
await router.isReady()
app.mount('#app')