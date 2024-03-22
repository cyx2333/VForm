import antdv from "./antdv"
import common from "./common"

export default {
  install(Vue) {
    Vue.use(antdv)
    Vue.use(common)
  }
}