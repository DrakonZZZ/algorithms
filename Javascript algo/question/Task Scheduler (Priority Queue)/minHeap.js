export class MinHeap {
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
      let parentIdx = this.parentIdx(idx)

      if (this.heap[parentIdx].priority > this.heap[idx].priority) {
        this.swap(parentIdx, idx)
        idx = parentIdx
      } else {
        break
      }
    }
  }

  remove() {
    if (this.heap.length === 0) return
    if (this.heap.length === 1) return this.heap.pop()

    const root = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.heapifyDown(0)
    return root
  }

  heapifyDown(idx) {
    const size = this.heap.size

    while (true) {
      let min = idx
      const leftIdx = this.leftChild(idx)
      const rightIdx = this.rightChild(idx)

      if (
        leftIdx < size &&
        this.heap[leftIdx].priority < this.heap[min].priority
      ) {
        min = leftIdx
      }

      if (
        rightIdx < size &&
        this.heap[rightIdx].priority < this.heap[min].priority
      ) {
        min = rightIdx
      }

      if (min !== idx) {
        this.swap(min, idx)
        min = size
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
}
