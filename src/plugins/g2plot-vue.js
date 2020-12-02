// 把g2plot封装成插件，https://github.com/open-data-plan/g2plot-vue
import * as g2ploteVue from '@opd/g2plot-vue'

const components = Object.keys(g2ploteVue)

const install = (app) => {
  components.forEach(component => {
    app.component(component)
  })
}

export default install
