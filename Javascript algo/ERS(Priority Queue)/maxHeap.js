export class MaxHeap {
  constructor() {
    this.heap = []
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

  swap(i1, i2) {
    ;[this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]]
  }

  insert(task) {
    this.heap.push(task)
    this.heapifyUp()
  }

  heapifyUp() {
    let idx = this.heap.length - 1

    while (idx > 0) {
      const parentIdx = this.parentIdx(idx)

      if (this.heap[parentIdx].priority < this.heap[idx].priority) {
        this.swap(parentIdx, idx)
        idx = parentIdx
      } else {
        break
      }
    }
  }

  remove() {
    if (this.heap.length === 0) return null
    if (this.heap.length === 1) return this.heap.pop()

    const root = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.heapifyDown(0) // Pass 0 to start from the root
    return root
  }

  heapifyDown(idx) {
    const size = this.heap.length
    while (true) {
      let max = idx
      const leftIdx = this.leftChild(idx)
      const rightIdx = this.rightChild(idx)

      if (
        leftIdx < size &&
        this.heap[leftIdx].priority > this.heap[max].priority
      ) {
        max = leftIdx
      }

      if (
        rightIdx < size &&
        this.heap[rightIdx].priority > this.heap[max].priority
      ) {
        max = rightIdx
      }

      if (max !== idx) {
        this.swap(max, idx)
        idx = max
      } else {
        break
      }
    }
  }

  peek() {
    return this.heap[0]
  }

  size() {
    return this.heap.length
  }

  getHeap() {
    return [...this.heap]
  }
}
