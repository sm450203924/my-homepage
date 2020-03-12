const path = require('path')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const productionGzipExtensions = ['js', 'css']
const isProduction = process.env.NODE_ENV === 'production'

function resolve (dir) {
  return path.join(__dirname, dir)
}

const JS_CDN = [
  // 生产CDN
  'https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.min.js',
  'https://cdn.bootcss.com/vue-router/3.1.2/vue-router.min.js'
  // 'https://cdn.jsdelivr.net/npm/echarts@4.2.1/dist/echarts.min.js',
  // 'https://cdn.jsdelivr.net/npm/vue-echarts@4.0.3'
]

const cdn = {
  css: ['https://cdn.bootcss.com/normalize/8.0.1/normalize.min.css'],
  js: JS_CDN
}

module.exports = {
  lintOnSave: true,
  // publicPath: isProduction ? CDN_URL : '/',
  publicPath: '/',
  transpileDependencies: [
    'vue-echarts',
    'resize-detector'
  ],
  chainWebpack: (config) => {
    // build打包才使用CDN
    if (isProduction) {
      config.plugin('html')
        .tap(args => {
          args[0].cdn = cdn
          return args
        })
    }

    config.resolve.alias
      .set('assets', resolve('src/assets'))
      .set('pages', resolve('src/pages'))
      .set('components', resolve('src/components'))
      .set('utils', resolve('src/utils'))
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    disableHostCheck: false,
    proxy: {
      '/api/v0/': {
        // 目标 API 地址
        target: 'http://127.0.0.1:4545',
        // 将主机标头的原点更改为目标URL
        changeOrigin: true
      }
    }
  },
  configureWebpack: config => {
    // 生产模式
    if (isProduction) {
      config.externals = {
        'vue': 'Vue',
        'vue-router': 'VueRouter'
        // 'vue-echarts': 'ECharts'
      }
      // 打包生产.gz包
      config.plugins.push(new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8
      }))
      // 添加自定义代码压缩配置
      config.plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              // warnings: false,
              drop_debugger: true,
              drop_console: true
            }
          },
          sourceMap: false,
          parallel: true
        })
      )
    }
  }
}
