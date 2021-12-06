import { createApp } from 'vue'
import router from '@/router/index'
import { key, store } from '@/store/index'
import App from './App.vue'
import './style.styl'

if (import.meta.env.MODE === 'production') {
  import('@/common/utils/register-sw')
}

const app = createApp(App)
app.use(router).use(store, key).mount('#app')
