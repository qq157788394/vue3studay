// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      less: {
        // for less-loader@5
        javascriptEnabled: true,
        modifyVars: {
          'primary-color': '#00B9B2'
        }
      }
    }
  }
}
