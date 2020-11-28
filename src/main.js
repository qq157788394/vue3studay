// import './plugins/axios'
import 'ant-design-vue/lib/style/v2-compatible-reset.less'
import 'ant-design-vue/dist/antd.less'
import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import router from './router'
import store from './store'

createApp(App).use(Antd).use(store).use(router).mount('#app')
