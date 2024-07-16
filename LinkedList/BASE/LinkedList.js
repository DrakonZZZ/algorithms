class Node {
  constructor(data) {
    ;(this.data = data), (this.next = null)
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  add(data) {
    const newNode = new Node(data)
    if (!this.head) {
      this.head = newNode
    }

    let current = this.head

    while (current.next) {
      current = current.next
    }

    current.next = newNode
  }

  delete(value) {
    if (!this.head) return

    if (this.head.data === value) {
      this.head = this.head.next
      return
    }

    let current = this.head

    while (current.next) {
      if (current.next.value === value) {
        current.next = current.next.next
        return
      }
      current = current.next
    }
  }

  list() {
    let current = this.head

    while (current) {
      console.log(current.data)
      current = current.next
    }
  }
}
