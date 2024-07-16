class Node {
  constructor(data, time = 0) {
    this.data = data
    this.time = time
    this.next = null
  }
}

class CircularLinkedList {
  constructor() {
    ;(this.head = 0), (this.size = 0)
  }

  append(data, time) {
    const newNode = new Node(data, time)
    if (!this.head) {
      this.head = newNode
      newNode.next = this.head
      this.size++
      return
    }

    let current = this.head

    while (current.next !== this.head) {
      current = current.next
    }

    current.next = newNode
    newNode.next = this.head
    this.size++
  }

  list() {
    if (!this.head) {
      console.log('Empty list')
      return
    }

    let current = this.head

    while (current !== this.head) {
      console.log(`Process: ${current.data}, Time Slice: ${current.time}`)
    }
  }

  roundRobin() {
    if (!this.head) {
      console.log('No processes to run')
      return
    }

    let current = this.head
    let cycles = 0
    const maxCycles = this.size * 4

    do {
      console.log(`Scheduling process: ${current.data} for ${current.time}ms`)

      setTimeout(() => {
        console.log(`Process ${current.data} completed its time slice`)
      }, current.time)

      cycles++
      current = current.next
    } while (cycles < maxCycles)
  }
}
