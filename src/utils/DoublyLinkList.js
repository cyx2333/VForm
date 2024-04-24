class Node{
  constructor(data) {
    this.data = data
    this.next = null
    this.prev = null
  }
}

class DoublyLinkList{
  constructor() {
    this.head = null // 双向链表开头
    this.tail = null // 双向链表结尾
  }

  add(data, index) {
    let node = new Node(data)
    // 先判断是不是第一个
    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      if (index == 0) {
        this.head.prev = node
        node.next = this.head
        this.head = node
      } else if(index == this.count() - 1) {
        this.tail.next = node
        node.prev = this.tail
        this.tail = node
      } else {
        let current = this.head
        let num = 1
        while (current) {
          current = current.next
          if (current && num == index) {
            current.prev.next = node
            node.prev = current.prev
            node.next = current
            current.prev = node
            current = null
          }
          num++
        }
      }
    }
  }

  move(index, newIndex) {
    // 将位于 index 上的元素移动到 newIndex
    let current = this.head
    let item = null
    let newItem = null
    let num = 0
    while (current) {
      if (num == index) {
        item = current
      }
      if (num == newIndex) {
        newItem = current
      }
      if (item && newItem) {
        break
      }
      current = current.next
      num++
    }
    if (item.prev) {
      item.prev.next = item.next
      item.next.prev = item.prev
    }
  }

  count() {
    if (this.head) {
      let current = this.head
      let num = 1
      while (current) {
        current = current.next
        if (current) {
          num ++
        }
      }
      return num
    } else {
      return 0
    }
  }
}

export default DoublyLinkList