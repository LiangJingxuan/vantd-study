import mixin from './mixin'
import filter from './filter'
import directive from './directive'
import component from './components'

// 自定义插件
export default {
  install(Vue, opt) {
    Vue.mixin(mixin)
    Object.keys(filter).map(name => Vue.filter(name, filter[name]))
    Object.keys(directive).map(name => Vue.directive(name, directive[name]))
    Object.keys(component).map(name => Vue.component(name, component[name]))
  }
}