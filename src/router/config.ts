import DefaultLayout from '@/layout/default/index.vue'
import HomeView from '../views/HomeView.vue'


const route = [
    {
      path: '/',
      name: 'Root',
      component: DefaultLayout,
      children: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            meta: {
                title: 'Dashboard',
                icon: 'dashboard'
            }
        },
        {
            path: '/fish',
            name: 'fish',
            meta: {
                title: 'Fish',
            },
            children: [
                {
                    name: 'fish-list',
                    path: 'list',
                    meta: {
                        title: 'List',
                    },
                    component: () => import('@/views/fish/list/IndexView.vue')
                },
                {
                    name: 'fish-summary',
                    path: 'summary',
                    meta: {
                        title: 'Summary',
                    },
                    component: () => import('@/views/fish/list/IndexView.vue')
                }
            ]
        },
      ]
    },
]

export default route