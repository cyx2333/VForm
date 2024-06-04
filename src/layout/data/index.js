import { deepCopyArray, deepCopyObject, generateId } from "@/utils/util";

// 用于存放widgetList数据，以及观察者
class WidgetData {
  constructor() {
    this.widgetList = this.createReactive([])
    this.observers = []
    this.selectKey = ''
    this.elementType = ''
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

  setWidgetList(mod, data, list = this.widgetList) {
    // console.log(key, data, this.widgetList);
    if (mod == 'added') {
      let widgetList = list
      let newIndex = data['newIndex']
      let element = deepCopyObject(data['element'])
      element.key = element.type + generateId() // 生成唯一key
      // 当element中options存在defaultChildrenCount时，生成对应的children（包含 父级key、defaultChildrenOptions中的内容）
      if (element.defaultChildrenCount) {
        for (let i = 0; i < element.defaultChildrenCount; i++) {
          let key = element.defaultChildrenObject.type + generateId()
          let item = deepCopyObject(Object.assign({
            parentKey: element.key,
            key,
            children: [],
          }, element.defaultChildrenObject))
          element.children.push(item)
        }
      }

      if (newIndex == widgetList.length) {
        widgetList.push(this.createReactive(element))
      } else if (newIndex < widgetList.length) {
        widgetList.splice(newIndex, 0, element)
      }
    } else {
      let widgetList = deepCopyArray(list)
      let newIndex = data['newIndex']
      let oldIndex = data['oldIndex']
      let element = widgetList[oldIndex]
      widgetList.splice(oldIndex, 1) // 删除元素
      widgetList.splice(newIndex, 0, element)
      list = widgetList
    }
  }

  setChildrenWidget(mod, data, parentKey) {
    // 向子项添加内容
    const list = this.find(parentKey)
    this.setWidgetList(mod, data, list.children)
  }

  addChildren(count, element) {
    // 向对应parentKey添加count数量的子项
    if (count) {
      console.log(element, this.widgetList);
      for (let i = 0; i < count; i++) {
        let key = element.defaultChildrenObject.type + generateId()
        let item = deepCopyObject(Object.assign({
          parentKey: element.key,
          key,
          children: [],
        }, element.defaultChildrenObject))
        element.children.push(this.createReactive(item))
      }
    }
  }

  notify() {
    // 通知观察者
    // 仅通知key为 premier 或 对应selectKey 
    this.observers.forEach(item => {
      item.callback()
    })
  }

  setSelectKey(key) {
    let element = this.find(key)
    if (element) {
      this.selectKey = key
      this.elementType = element.type // 设置type，提供给setting模块使用
      this.notify()
    }
  }

  find(key) {
    // 对key进行深入查找
    let res = null
    const func = (list, key) => {
      for (let item of list) {
        if (item.key === key) {
          res = item
          break
        } else {
          if (item.children) {
            func(item.children, key)
          }
        }
      }
    }
    func(this.widgetList, key)
    return res
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