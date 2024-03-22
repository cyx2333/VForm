import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import plugins from './plugins'
import 'ant-design-vue/dist/reset.css';

createApp(App).use(plugins).use(store).use(router).mount('#app')
