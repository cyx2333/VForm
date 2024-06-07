import { h } from "vue";
import setting from '@/components/setting'
// import { deepCopyObject } from "@/utils/util.js";

export default {
  props: {
    type: String
  },
  setup() {
    // const WidgetData = inject('$WidgetData')
    // const key = 'settingView'
    // const type = ref('')
    // const params = ref({})

    // WidgetData.addObserver(key, () => {
    //   type.value = WidgetData.elementType || ''
    //   params.value = deepCopyObject(WidgetData.find(WidgetData.selectKey))
    //   console.log('Observer', params.value);
    // })

    return {
    }
  },
  render() {
    if (this.type) {
      return h(setting[this.type])
    } else {
      return ''
    }
  },
}