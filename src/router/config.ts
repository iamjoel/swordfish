import HomeView from '../views/HomeView.vue'

const route = [
    {
      path: '/',
      name: '',
      component: HomeView,
      meta: {
          hideInMenu: true
      }
    },
    {
      path: '/fish',
      name: 'fish',
      meta: {
        title: 'Fish'
      },
      children: [
          {
            name: 'list',
            path: 'list',
            meta: {
                title: 'List'
            },
            component: () => import('@/views/fish/list/IndexView.vue')
          },
          {
            name: 'summary',
            path: 'summary',
            meta: {
                title: 'Summary'
            },
            component: () => import('@/views/fish/list/IndexView.vue')
          }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/user/LoginView.vue'),
      meta: {
          hideInMenu: true
      }
    },
]

export default route