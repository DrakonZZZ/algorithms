// time complexity O(n) traverse, O(1) append and prepend

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
  }

  prepend(data) {
    const newNode = new Node(data)
    newNode.next = this.head
    this.head = newNode
  }

  traverse(idx) {
    if (idx < 0) {
      throw new Error('Index cannot be negative.')
    }
    let current = this.head
    let count = 0

    while (current && count !== idx) {
      current = current.next
      count++
    }

    if (!current) {
      throw new Error('Index out of range.')
    }

    return current
  }

  insert(idx, data) {
    try {
      if (idx === 0) {
        this.prepend(data)
        return
      }

      const newNode = new Node(data)
      const prevNode = this.traverse(idx - 1)
      newNode.next = prevNode.next
      prevNode.next = newNode
    } catch (error) {
      console.error(error.message)
    }
  }

  delete(value) {
    if (!this.head) {
      return
    }

    if (this.head.data === value) {
      this.head = this.head.next
      return
    }

    let current = this.head

    while (current.next) {
      if (current.next.data === value) {
        current.next = current.next.next
        return
      }
      current = current.next
    }

    console.log(`Value ${value} not found in the list.`)
  }

  list() {
    let current = this.head

    while (current) {
      console.log(current.data)
      current = current.next
    }
  }
}

const myList = new LinkedList()

myList.append(1)
myList.append(2)
myList.append(3)

console.log('Original list:')
myList.list()

myList.prepend(0)
console.log('List after prepend:')
myList.list()

myList.insert(2, 2.5)
console.log('List after insert:')
myList.list()
