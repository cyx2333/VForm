import { h, inject, ref } from "vue";
import setting from '@/components/setting'

export default {
  props: {
  },
  setup() {
    const WidgetData = inject('$WidgetData')
    const key = 'settingView'
    const type = ref('')

    WidgetData.addObserver(key, () => {
      type.value = WidgetData.elementType || ''
    })

    return {
      type,
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