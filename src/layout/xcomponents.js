import build from "@/components/build";
import { deepCopyObject } from "@/utils/util";
import { h } from "vue";

export default {
  props: {
    params: Object, // 组件名称
  },
  setup(props) {
    const { params } = props
    return {
      params,
    }
  },
  render() {
    const params = deepCopyObject(this.params)
    const type = params.type
    return h(build[type], {
      params: params
    })
  },
}