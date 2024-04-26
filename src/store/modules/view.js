import { deepCopyArray } from "@/utils/util";

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
    },
    getOptions(state) {
      if (state.selectKey != '') {
        return state.widgetList.find(e => e.key === state.selectKey)
      } else {
        return []
      }
    }
  },
  mutations: {
    change(state, params) {
      state.widgetList = deepCopyArray(params)
    },
    select(state, key) {
      state.selectKey = key;
    },
  }
}