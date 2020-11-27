// vue.config.js for less-loader@7.0.0
module.exports = {
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#00B9B2',
            'layout-header-background': '#001E21'
          },
          javascriptEnabled: true
        }
      }
    }
  }
}
