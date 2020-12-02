// 把vue3-clipboard封装成插件，https://github.com/Daizhen1995/vue3-clipboard
import vue3Clipboard from 'vue3-clipboard'

const install = (app, options) => {
  app.use(vue3Clipboard, {
    autoSetContainer: true,
    appendToBody: true
  })
}

export default install
