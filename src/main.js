import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import plugins from './plugins'
import 'ant-design-vue/dist/reset.css';

// 初始化数据存储
import WidgetData from './layout/data'

const app = createApp(App)

app.provide('$WidgetData', new WidgetData())

app.use(plugins).use(store).use(router).mount('#app')