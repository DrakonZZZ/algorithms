class RingBuffer {
  constructor(size) {
    this.buffer = new Array(size)
    this.head = 0
    this.tail = 0 // links tail to head
    this.size = size
    this.ringSize = 0
  }

  enqueue(value) {
    if (this.size === this.ringSize) {
      console.log('buffer overflow')
      return
    }

    this.buffer[this.head] = value
    this.head = (this.head + 1) % this.size
    this.ringSize++
  }

  dequeue() {
    if (this.ringSize === 0) {
      console.log('buffer underflow')
      return
    }

    const value = this.buffer[this.tail]
    this.tail = (this.tail + 1) % this.size
    this.ringSize--
    return value
  }

  isEmpty() {
    return this.ringSize === 0
  }

  peek() {
    return this.ringSize === 0 ? undefined : this.buffer[this.tail]
  }

  print() {
    console.log('Buffer:', this.buffer)
    console.log('Head:', this.head)
    console.log('Tail:', this.tail)
    console.log('Size:', this.ringSize)
  }
}

const buffer = new RingBuffer(5)
buffer.enqueue(1)
buffer.enqueue(2)
buffer.enqueue(3)

console.log('Peek:', buffer.peek())

console.log('Dequeued:', buffer.dequeue())
console.log('Dequeued:', buffer.dequeue())

buffer.enqueue(4)
buffer.enqueue(5)
buffer.enqueue(6)

buffer.print()
