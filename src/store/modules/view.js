import { deepCopyObject } from "@/utils/util";

export default {
  namespaced: true,
  state: {
    layout_id: 0, // layout选择
    widgetList: [],
    selectKey: '', // 当前选中的id
  },
  getters: {
    widgetList(state) {
      return state.widgetList
    },
    selectKey(state) {
      return state.selectKey
    }
  },
  mutations: {
    change(state, params) {
      state.widgetList = deepCopyObject(params)
    },
    select(state, key) {
      state.selectKey = key;
    },
  }
}