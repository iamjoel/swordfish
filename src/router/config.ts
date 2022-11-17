import DefaultLayout from '@/layout/default/index.vue'
import Dashboard from '@/views/dashboard.vue'

const route = [
  {
    path: '/',
    name: 'Root',
    component: DefaultLayout,
    children: [
      {
        path: '/',
        name: 'home',
        component: Dashboard,
        meta: {
          title: 'Dashboard',
          icon: 'dashboard',
        },
      },
      {
        path: '/fish',
        name: 'fish',
        meta: {
          title: 'Fish',
        },
        children: [
          {
            name: 'fish-summary',
            path: 'summary',
            meta: {
              title: 'Summary',
            },
            component: () => import('@/views/fish/summary/index.vue'),
          },
          {
            name: 'fish-list',
            path: 'list',
            meta: {
              title: 'List',
            },
            component: () => import('@/views/fish/list/index.vue'),
          },
        ],
      },
    ],
  },
]

export default route
