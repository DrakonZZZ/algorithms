class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  append(data) {
    const newNode = new Node(data)
    if (!this.head) {
      this.head = newNode
      this.head.next = this.head
      this.size++
      return
    }

    let current = this.head
    while (current !== this.head) {
      current = current.next
    }

    current.next = newNode
    newNode.next = this.head
    this.size++
  }

  remove(value) {
    if (!this.head) return

    if (this.head.data === value) {
      if (this.head.next === this.head) {
        // if there's only one node
        this.head = null
      } else {
        let current = this.head

        while (current !== this.head) {
          current = current.next
        }

        current.next = this.head.next
        this.head = this.head.next
        this.size--
        return
      }

      let current = this.head
      while (current.next !== this.head && current.next.value !== value) {
        current = current
      }

      if (current.next.value === value) {
        //if a match is found
        current.next = current.next.next
        this.size--
      }
    }
  }

  list() {
    if (!this.head) {
      console.log('Empty List')
      return
    }

    let current = this.head

    do {
      console.log(current.data)
      current = current.next
    } while (current.next !== this.head)
  }
}
