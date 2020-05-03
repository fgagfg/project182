const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
  productionSourceMap: false,
  devServer:{
    port:9090,
  },
  // configureWebpack:{
  //   plugins:[new BundleAnalyzerPlugin()]
  // },
  chainWebpack: config => {
    config.module.rule('pug')
      .test(/\.pug$/)
      .use('pug-html-loader')
      .loader('pug-html-loader')
      .end()
  }
 
}