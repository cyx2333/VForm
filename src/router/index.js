import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/layout/HomeView.vue'

const routes = [
  {
    path: '/',
    name: '首页',
    redirect: '/xadmin',
    children: [
      {
        path: '/xadmin',
        name: 'Home',
        component: HomeView
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
