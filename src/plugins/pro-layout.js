// 暂时还不能用，不支持vue3
// import ProLayout, { BlockLayout, PageHeaderWrapper, SiderMenuWrapper, GlobalFooter, SettingDrawer, DocumentTitle } from '@ant-design-vue/pro-layout'
import * as proLayout from '@ant-design-vue/pro-layout'

// const components = [
//   { name: 'pro-layout', src: ProLayout },
//   { name: 'block-layout', src: BlockLayout },
//   { name: 'page-header-wrapper', src: PageHeaderWrapper },
//   { name: 'sider-menu-wrapper', src: SiderMenuWrapper },
//   { name: 'global-footer', src: GlobalFooter },
//   { name: 'setting-drawer', src: SettingDrawer },
//   { name: 'document-title', src: DocumentTitle }
// ]

// components.forEach(component => {
//   app.component(component.name, component.src)
// })

const components = Object.keys(proLayout)

console.log(components)

const install = (app) => {
  components.forEach(component => {
    app.component(component)
  })
}

export default install
