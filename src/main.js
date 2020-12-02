import { createApp } from 'vue'
import plugins from '@/plugins'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

app.use(plugins)
app.use(store)
app.use(router)
app.mount('#app')
