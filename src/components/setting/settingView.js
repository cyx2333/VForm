import { h } from "vue";
import setting from '@/components/setting'
// import { deepCopyObject } from "@/utils/util.js";

export default {
  props: {
    type: String
  },
  setup() {
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