import { createRouter, createWebHistory } from 'vue-router'
import config from './config'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/user/login.vue'),
      meta: {
          hideInMenu: true
      }
    },
    ...config
  ]
})

export default router
