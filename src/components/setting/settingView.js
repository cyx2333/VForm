import { h, ref, watch } from "vue";
import setting from '@/components/setting'
import { useStore } from "vuex";

export default {
  props: {
  },
  setup() {
    const store = useStore()
    const options = ref({})
    watch(() => store.state.view.selectKey, () => {
      options.value = store.getters['view/getOptions']
    })
    return {
      options,
    }
  },
  render() {
    const { type, options } = this.options
    if (type) {
      return h(setting[type], {options})
    } else {
      return ''
    }
  },
}