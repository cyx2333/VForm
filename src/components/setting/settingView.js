import { h, inject, ref } from "vue";
import setting from '@/components/setting'
import { deepCopyObject } from "@/utils/util";

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
        params.value = deepCopyObject(WidgetData.find(selectKey))
        console.log(params);
      }
    })

    return {
      params,
    }
  },
  render() {
    const { type } = this.params
    console.log('render');
    if (type) {
      return h(setting[type], {
        params: this.params
      })
    } else {
      return ''
    }
  },
}