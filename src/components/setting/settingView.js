import { h, inject, ref } from "vue";
import setting from '@/components/setting'
// import { deepCopyObject } from "@/utils/util";

export default {
  props: {
  },
  setup() {
    const WidgetData = inject('$WidgetData')
    const key = 'settingView'
    const params = ref({})

    WidgetData.addObserver(key, () => {
      const selectKey = WidgetData.selectKey
      if (selectKey) {
        params.value = WidgetData.find(selectKey)
        console.log(params, WidgetData.widgetList);
      }
    })

    return {
      params,
    }
  },
  render() {
    const { setType } = this.params
    console.log(setting, setType, setting[setType]);
    if (setType) {
      return h(setting[setType], {params: this.params})
    } else {
      return ''
    }
  },
}