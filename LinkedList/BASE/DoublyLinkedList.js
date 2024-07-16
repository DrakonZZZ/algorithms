class Node {
  constructor(data) {
    ;(this.data = data), (this.prev = null), (this.next = null)
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
  }

  append(data) {
    const newNode = new Node(data)
    if (!this.head) {
      this.head = newNode
      return
    }

    let current = this.head
    while (current.next) {
      current = current.next
    }

    current.next = newNode
    newNode.prev = current
  }

  prepend(data) {
    const newNode = new Node(data)
    newNode.next = this.head
    this.head = newNode
  }

  traverse(idx) {
    let current = this.head
    let count = 0

    while (current && count < idx) {
      current = current.next
      count++
    }
    if (!current) {
      throw new Error('Index out of range.')
    }

    return current
  }

  insert(idx, data) {
    if (idx === 0) {
      this.prepend(data)
      return
    }

    const newNode = new Node(data)

    let current = this.head
    let count = 0

    while (current && current < idx) {
      current = current.next
    }

    if (current) {
      this.append(data)
      return
    }

    newNode.next = current
    newNode.prev = current.prev

    if (current.prev) {
      current.prev.next = newNode
    }

    current.prev
  }

  list() {
    let current = this.head

    while (current) {
      console.log(current.data)
      current = current.next
    }
  }
}
