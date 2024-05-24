import { deepCopyArray, deepCopyObject, generateId } from "@/utils/util";

// 用于存放widgetList数据，以及观察者
class WidgetData {
  constructor() {
    this.widgetList = this.createReactive([])
    this.observers = []
    this.selectKey = ''
  }

  addObserver(key, callback) {
    // observer 由key、回调函数构成
    this.observers.push({
      key,
      callback
    })
  }

  proxyHandler() {
    const _this = this
    return {
      get(target, key, receiver) {
        // console.log('get', target, key, receiver);
        return Reflect.get(target, key, receiver);
      },
      set(target, key, value, receiver) {
        // console.log('set' + key);
        Reflect.set(target, key, value, receiver)
        _this.notify()
        return true;
      },
    }
  }

  createReactive(state) {
    Object.keys(state).forEach(key => { 
      let value = state[key]
      if (typeof value === "object") {
        this.createReactive(value)
        state[key] = new Proxy(value, this.proxyHandler())
      }
    })
    return new Proxy(state, this.proxyHandler())
  }

  setWidgetList(key, data) {
    // console.log(key, data, this.widgetList);
    if (key == 'added') {
      let widgetList = this.widgetList
      let newIndex = data['newIndex']
      let element = deepCopyObject(data['element'])
      element.key = element.type + generateId()
      if (newIndex == widgetList.length) {
        widgetList.push(this.createReactive(element))
      } else if (newIndex < widgetList.length) {
        widgetList.splice(newIndex, 0, element)
      }
    } else {
      let widgetList = deepCopyArray(this.widgetList)
      let newIndex = data['newIndex']
      let oldIndex = data['oldIndex']
      let element = widgetList[oldIndex]
      widgetList.splice(oldIndex, 1) // 删除元素
      widgetList.splice(newIndex, 0, element)
      this.widgetList = widgetList
    }
  }

  notify() {
    // 通知观察者
    // 仅通知key为 premier 或 对应selectKey 
    console.log('notify', this.observers, this.widgetList);
    this.observers.forEach(item => {
      item.callback()
    })
  }

  setSelectKey(key) {
    this.selectKey = key
    this.notify()
  }

  removeObserver(key) {
    // 移除观察者
    let index = this.observers.findIndex(e => e.key === key)
    if (index >= 0) {
      this.observers.splice(index, 1)
    }
  }

}

export default WidgetData