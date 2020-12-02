// vue.config.js for less-loader@7.0.0
const CompressionPlugin = require('compression-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  productionSourceMap: false,
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
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(
        new CompressionPlugin()
        // new BundleAnalyzerPlugin()
      )
    } else {
      config.devtool = 'souce-map'
    }
  }
}
