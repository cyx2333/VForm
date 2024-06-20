import aIcon from "@/components/a-icon/a-icon.vue"
import aIconFont from "@/components/a-icon/a-iconfont.vue"

export default {
  install(Vue) {
    Vue.component('a-icon', aIcon)
    Vue.component('a-iconfont', aIconFont)
  }
}