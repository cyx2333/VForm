import { h, inject, ref } from "vue";
import setting from '@/components/setting'
import { deepCopyObject } from "@/utils/util";

export default {
  props: {
  },
  setup() {
    const WidgetData = inject('$WidgetData')
    const key = 'settingView'
    const options = ref({})

    WidgetData.addObserver(key, () => {
      const widgetList = WidgetData.widgetList
      const selectKey = WidgetData.selectKey
      if (selectKey) {
        options.value = deepCopyObject(widgetList.find(e => e.key === selectKey))
      }
    })

    return {
      options,
    }
  },
  render() {
    const { type, key, options } = this.options
    if (type) {
      return h(setting[type], {options, key})
    } else {
      return ''
    }
  },
}