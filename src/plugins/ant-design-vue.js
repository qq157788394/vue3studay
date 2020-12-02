// 把ant-design-vue封装成插件
import 'ant-design-vue/lib/style/v2-compatible-reset.less'
import 'ant-design-vue/dist/antd.less'
import Antd from 'ant-design-vue'

const install = (app, options) => {
  app.use(Antd)
}

export default install
