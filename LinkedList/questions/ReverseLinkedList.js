class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  append(value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      return
    }

    let current = this.head
    while (current.next) {
      current = current.next
    }

    current.next = newNode
  }

  reverse() {
    let current = this.head
    let prev = null
    let next = null

    while (current) {
      next = current.next
      current.next = prev
      prev = current
      current = next
    }

    this.head = prev
  }

  List() {
    let current = this.head
    while (current) {
      console.log(current.value)
      current = current.next
    }
  }
}

const list = new SinglyLinkedList()
list.append(1)
list.append(2)
list.append(3)
list.append(4)

console.log('Original list:')
list.list()

list.reverse()

console.log('Reversed list:')
list.list()
