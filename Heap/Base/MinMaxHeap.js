class MinMaxHeap {
  constructor(comparator = (a, b) => a - b) {
    this.heap = []
    this.comparator = comparator
  }

  parentIdx(i) {
    return Math.floor((i - 1) / 2)
  }

  leftChild(i) {
    return 2 * i + 1
  }

  rightChild(i) {
    return 2 * i + 2
  }

  swap(index1, index2) {
    ;[this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ]
  }

  // O(log n)
  insert(value) {
    this.heap.push(value)
    this.bubbleUp(this.heap.length - 1)
  }

  bubbleUp(idx) {
    while (idx > 0) {
      // Corrected condition
      const parentIdx = this.parentIdx(idx)
      if (this.comparator(this.heap[idx], this.heap[parentIdx]) < 0) {
        this.swap(idx, parentIdx)
        idx = parentIdx
      } else {
        break
      }
    }
  }

  // O(log n)
  remove() {
    if (this.heap.length === 0) return null

    if (this.heap.length === 1) {
      return this.heap.pop()
    }

    const root = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.bubbleDown(0)
    return root
  }

  bubbleDown(idx) {
    const lastIdx = this.heap.length - 1

    while (true) {
      let smallest = idx
      const leftChild = this.leftChild(idx)
      const rightChild = this.rightChild(idx)

      if (
        leftChild <= lastIdx &&
        this.comparator(this.heap[leftChild], this.heap[smallest]) < 0
      ) {
        smallest = leftChild
      }

      if (
        rightChild <= lastIdx &&
        this.comparator(this.heap[rightChild], this.heap[smallest]) < 0
      ) {
        smallest = rightChild
      }

      if (smallest !== idx) {
        this.swap(idx, smallest)
        idx = smallest
      } else {
        break
      }
    }
  }

  peek() {
    return this.heap.length > 0 ? this.heap[0] : null
  }

  isEmpty() {
    return this.heap.length === 0
  }

  size() {
    return this.heap.length
  }
}

const minHeap = new MinMaxHeap() // Min-Heap by default
minHeap.insert(10)
minHeap.insert(5)
minHeap.insert(20)
minHeap.insert(1)

console.log(minHeap.peek()) // Output: 1
console.log(minHeap.remove()) // Output: 1
console.log(minHeap.peek()) // Output: 5
console.log(minHeap.isEmpty()) // Output: false

const maxHeap = new MinMaxHeap((a, b) => b - a) // Max-Heap using custom comparator
maxHeap.insert(10)
maxHeap.insert(5)
maxHeap.insert(20)
maxHeap.insert(1)

console.log(maxHeap.peek()) // Output: 20
console.log(maxHeap.remove()) // Output: 20
console.log(maxHeap.peek()) // Output: 10
console.log(maxHeap.isEmpty()) // Output: false
