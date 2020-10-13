module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  },
  // devServer: {
  //   // disableHostCheck: true 内网穿透支持访问设置
  //   // open: true, //是否自动弹出浏览器页面
  //   // host: "localhost",
  //   port: '8080',
  //   // https: false,
  //   // hotOnly: false,
  //   proxy: 'http://192.168.0.149:8080'
  // },
  publicPath: process.env.NODE_ENV === 'production' ? '/mall/' : '/', //打包后的位置(如果不设置这个静态资源会报404)
  productionSourceMap: false,  //去掉打包的时候生成的map文件
  outputDir: 'dist',//打包后的目录名称
}