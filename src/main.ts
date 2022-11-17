import { createApp } from 'vue'

import ArcoVue from '@arco-design/web-vue'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
import '@arco-design/web-vue/dist/arco.css'

import './mock';

import store from './stores'

import App from './App.vue'
import router from './router'

import i18n from './locale';

import './assets/main.css'

const app = createApp(App)

app.use(ArcoVue, {})
app.use(ArcoVueIcon)

app.use(router)
app.use(store)
app.use(i18n as any)

app.mount('#app')
