import { deepCopyArray, deepCopyObject, generateId } from "@/utils/util"

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
      const { key, data } = params
      const widgetList = deepCopyArray(state.widgetList)
      if (key == 'added') {
        let newIndex = data['newIndex']
        let element = deepCopyObject(data['element'])
        element.key = element.type + generateId()
        if (newIndex == widgetList.length) {
          widgetList.push(element)
        } else if (newIndex < widgetList.length) {
          widgetList.splice(newIndex, 0, element)
        }
      } else if (key == 'moved') {
        let newIndex = data['newIndex']
        let oldIndex = data['oldIndex']
        let element = widgetList[oldIndex]
        widgetList.splice(oldIndex, 1) // 删除元素
        widgetList.splice(newIndex, 0, element)
      }
      state.widgetList = widgetList
    },
    select(state, key) {
      state.selectKey = key;
    },
  }
}