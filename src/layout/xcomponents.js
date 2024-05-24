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
    const data = ref({
      key: params.key,
      selected: false,
      type: params.type,
      options: params.options 
    })
    const options = ref({})
    if (params.key) {
      WidgetData.addObserver(params.key, () => {
        const widgetList = WidgetData.widgetList
        const selectKey = WidgetData.selectKey
        options.value = widgetList.find(e => e.key === params.key).options
        data.value = {
          key: params.key,
          selected: selectKey === params.key,
          options,
          type: params.type,
        }
      })
    }

    return {
      data,
    }
  },
  render() {
    const data = deepCopyObject(this.data)
    const type = data.type
    return h(build[type], {
      params: data
    })
  },
}