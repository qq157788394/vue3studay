// 所有的插件一次性引入
import antDesignVue from '@/plugins/ant-design-vue'
import axios from '@/plugins/axios'
import g2plotVue from '@/plugins/g2plot-vue'
import vue3Clipboard from '@/plugins/vue3-clipboard'

const install = (app, options) => {
  app.use(antDesignVue)
  app.use(axios)
  app.use(g2plotVue)
  app.use(vue3Clipboard)
}

export default install
