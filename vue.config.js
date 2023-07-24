const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  //配置@别名
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'pages': '@/pages',
        'utils': '@/utils',
        'store': '@/store',
        'router': '@/router',
        'style': '@/style',
        'api': '@/api',
        'mock': '@/mock',
      }
    }
  },
})
