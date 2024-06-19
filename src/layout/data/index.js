import { deepCopyObject, generateId } from "@/utils/util";

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
    state.__isReactive__ = true
    return new Proxy(state, this.proxyHandler())
  }

  setWidgetList(mod, data, list = this.widgetList) {
    // console.log(mod, data, deepCopyArray(this.widgetList), this.widgetList, list);
    if (mod == 'added') {
      this.add(data, list)
    } else if (mod == 'moved') {
      this.move(list, data['newIndex'], data['oldIndex'])
    } else if (mod == 'removed') {
      let oldIndex = data['oldIndex']
      list.splice(oldIndex, 1) // 删除元素
    }
  }
  
  add(data, list) {
    let newIndex = data['newIndex']
    let element = !data['element'].__isReactive__ ? deepCopyObject(data['element']) : data['element']
    element.key = element.key ?? element.type + generateId() // 生成唯一key, 且避免重复生成
    // 当element中options存在defaultChildrenCount时，生成对应的children（包含 父级key、defaultChildrenOptions中的内容）
    if (element.defaultChildrenCount && element.children.length === 0) {
      for (let i = 0; i < element.defaultChildrenCount; i++) {
        let key = element.defaultChildrenObject.type + generateId()
        let item = deepCopyObject(Object.assign({
          parentKey: element.key,
          key,
          children: [],
        }, element.defaultChildrenObject))
        element.children.push(item)
      }
      this.additional(element)
    }

    list.splice(newIndex, 0, !data['element'].__isReactive__ ? this.createReactive(element) : element)
  }

  move(list, newIndex, oldIndex) {
    let element = list.splice(oldIndex, 1)[0] // 删除元素
    if (newIndex < oldIndex) {
      list.splice(newIndex, 0, element)
    } else {
      list.splice(newIndex, 0, element)
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

  additional(element) {
    // 当一些组件需要做额外操作时
    // 例如：tabs组件要定义默认的选中activeKey
    switch (element.type) {
      case 'tabs':
        element.options.activeKey = element.children[0].key
        break;
    }
  }

}

export default WidgetData