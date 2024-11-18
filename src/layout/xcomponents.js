import build from "@/components/build";
// import { deepCopyObject } from "@/utils/util";
import { h  } from "vue";
// import { inject } from 'vue';

export default {
  props: {
    params: Object, // 组件名称
  },
  setup(props) {
    const { params } = props
    // const data = params
    // const WidgetData = inject('$WidgetData')
    // const obj = Object.assign({}, params)
    // if (params.key) {
    //   WidgetData.addObserver(params.key, () => {
    //     // data.value = deepCopyObject(obj)
    //     // console.log(data);
    //   })
    // }

    return {
      params,
    }
  },
  render() {
    const params = this.params
    const type = params.type
    return h(build[type], {
      params,
    })
  },
}