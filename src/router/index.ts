import { createRouter, createWebHistory } from 'vue-router'
import config from './config'
import createRouteGuard from './guard'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/user/login.vue'),
      meta: {
        title: 'Login',
        hideInMenu: true,
      },
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/user/register.vue'),
      meta: {
        title: 'Register',
        hideInMenu: true,
      },
    },
    {
      path: '/forget-password',
      name: 'forget-password',
      component: () => import('@/views/user/forget-password.vue'),
      meta: {
        title: 'Forget password',
        hideInMenu: true,
      },
    },
    ...config,
  ],
})

createRouteGuard(router)

export default router
