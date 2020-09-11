// 自定义插件
import Vue from 'vue'
export default {
  install(Vue, opt){
    Vue.filter('fmtGender', val => ['男', '女'][val])
  }
}