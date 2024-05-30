import build from "@/components/build";
import { deepCopyObject } from "@/utils/util";
import { h, inject, ref } from "vue";

export default {
  props: {
    params: Object, // 组件名称
  },
  setup(props) {
    const { params } = props
    const WidgetData = inject('$WidgetData')
    const obj = Object.assign({}, params)
    const data = ref(obj)
    if (params.key) {
      WidgetData.addObserver(params.key, () => {
        data.value = deepCopyObject(obj)
      })
    }

    return {
      data,
    }
  },
  render() {
    const data = this.data
    const type = data.type
    return h(build[type], {
      params: data
    })
  },
}