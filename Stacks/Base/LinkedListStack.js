class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class Stack {
  constructor() {
    this.top = null
    this.size = 0
  }

  push(value) {
    const newNode = new Node(value)
    newNode.next = this.top
    this.top = newNode
    this.size++
  }

  pop() {
    if (!this.isEmpty()) {
      return 'underflow'
    }
    const removeNode = this.top
    this.top = this.top.next
    removeNode.next = null
    this.size--
    return removeNode.data
  }

  isEmpty() {
    return this.size === 0
  }

  peek() {
    return this.isEmpty() ? undefined : this.top.data
  }
}
