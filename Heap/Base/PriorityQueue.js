class MinHeap {
  constructor() {
    this.heap = []
  }

  insert(value) {
    this.heap.push(value) // Add new value at the end
    this.bubbleUp(this.heap.length - 1) // Rebalance the heap
  }

  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = this.parent(index)

      if (this.heap[index] < this.heap[parentIndex]) {
        this.swap(index, parentIndex)
        index = parentIndex
      } else {
        break
      }
    }
  }

  remove() {
    if (this.heap.length === 0) {
      return null // No elements to remove
    }

    if (this.heap.length === 1) {
      return this.heap.pop() // Only one element
    }

    const root = this.heap[0] // The minimum element
    this.heap[0] = this.heap.pop() // Replace with the last element
    this.bubbleDown(0) // Rebalance the heap
    return root
  }

  bubbleDown(index) {
    const lastIndex = this.heap.length - 1

    while (true) {
      let smallest = index
      const leftChild = this.leftChild(index)
      const rightChild = this.rightChild(index)

      if (
        leftChild <= lastIndex &&
        this.heap[leftChild] < this.heap[smallest]
      ) {
        smallest = leftChild
      }

      if (
        rightChild <= lastIndex &&
        this.heap[rightChild] < this.heap[smallest]
      ) {
        smallest = rightChild
      }

      if (smallest !== index) {
        this.swap(index, smallest)
        index = smallest
      } else {
        break
      }
    }
  }

  parent(index) {
    return Math.floor((index - 1) / 2)
  }

  leftChild(index) {
    return 2 * index + 1
  }

  rightChild(index) {
    return 2 * index + 2
  }

  swap(index1, index2) {
    ;[this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ]
  }

  peek() {
    return this.heap.length > 0 ? this.heap[0] : null // Return the top (minimum) element
  }

  isEmpty() {
    return this.heap.length === 0
  }
}

class PriorityQueue {
  constructor() {
    this.minHeap = new MinHeap()
  }

  enqueue(value) {
    this.minHeap.insert(value) // Insert into the heap
  }

  dequeue() {
    return this.minHeap.remove() // Remove the top element
  }

  peek() {
    return this.minHeap.peek() // Get the top element without removing
  }

  isEmpty() {
    return this.minHeap.isEmpty() // Check if the queue is empty
  }
}

const pq = new PriorityQueue()
pq.enqueue(10)
pq.enqueue(5)
pq.enqueue(15)
pq.enqueue(7)

console.log('Priority Queue:', pq.peek()) // Outputs the top element
