class MinHeap {
  constructor() {
    this.heap = []
  }

  insert(value) {
    this.heap.push(value)
    this.bubbleUp(this.heap.length - 1)
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
      return null
    }

    if (this.heap.length === 1) {
      return this.heap.pop()
    }

    const root = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.bubbleDown(0)
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

  isEmpty() {
    return this.heap.length === 0
  }

  peek() {
    return this.heap.length > 0 ? this.heap[0] : null
  }
}

class MaxHeap extends MinHeap {
  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = this.parent(index)

      if (this.heap[index] > this.heap[parentIndex]) {
        this.swap(index, parentIndex)
        index = parentIndex
      } else {
        break
      }
    }
  }

  bubbleDown(index) {
    const lastIndex = this.heap.length - 1

    while (true) {
      let largest = index
      const leftChild = this.leftChild(index)
      const rightChild = this.rightChild(index)

      if (leftChild <= lastIndex && this.heap[leftChild] > this.heap[largest]) {
        largest = leftChild
      }

      if (
        rightChild <= lastIndex &&
        this.heap[rightChild] > this.heap[largest]
      ) {
        largest = rightChild
      }

      if (largest !== index) {
        this.swap(index, largest)
        index = largest
      } else {
        break
      }
    }
  }
}
class MedianFinder {
  constructor() {
    this.minHeap = new MinHeap()
    this.maxHeap = new MaxHeap()
  }

  addNum(num) {
    if (this.maxHeap.isEmpty() || num <= this.maxHeap.peek()) {
      this.maxHeap.insert(num)
    } else {
      this.minHeap.insert(num)
    }

    if (this.maxHeap.heap.length > this.minHeap.heap.length + 1) {
      this.minHeap.insert(this.maxHeap.remove())
    } else {
      this.maxHeap.insert(this.minHeap.remove())
    }
  }

  findMedian() {
    if (this.maxHeap.heap.length === this.minHeap.heap.length) {
      return (this.maxHeap.peek() + this.minHeap.peek()) / 2
    } else {
      return this.maxHeap.peek()
    }
  }
}

const mf = new MedianFinder()
mf.addNum(1)
mf.addNum(2)
console.log('Median:', mf.findMedian()) // Outputs 1.5

mf.addNum(3)
console.log('Median:', mf.findMedian()) // Outputs 2

mf.addNum(4)
mf.addNum(5)
console.log('Median:', mf.findMedian())
