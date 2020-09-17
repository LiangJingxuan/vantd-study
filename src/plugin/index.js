// 自定义插件
export default {
  install(Vue, opt) {
    Vue.filter('fmtGender', val => ['男', '女'][val])
    Vue.mixin({
      methods: {
        $log(str) {
          console.log(str)
        }
      }
    })
  }
}