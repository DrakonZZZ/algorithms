class Heap {
  #heap = []

  insert(value) {
    this.#heap.push(value)
    let current = this.#heap.length - 1

    while (
      current > 0 &&
      this.#heap[current] > this.#heap[this.parent(current)]
    ) {
      const parentIdx = this.parent(current)
      this.swap(current, parentIdx)
      current = parentIdx // Update the current index to parent
    }
  }

  remove() {
    if (this.#heap.length === 0) {
      return null
    }

    if (this.#heap.length === 1) {
      return this.#heap.pop() // If only one element, just pop
    }

    const removed = this.#heap[0]
    this.#heap[0] = this.#heap.pop() // Move the last element to the root
    this.heapDown(0) // Rebalance the heap from the root
    return removed
  }

  heapDown(idx) {
    let size = this.#heap.length
    while (true) {
      let maxIdx = idx // Correct initialization
      const leftIdx = this.leftChild(idx)
      const rightIdx = this.rightChild(idx)

      if (leftIdx < size && this.#heap[leftIdx] > this.#heap[maxIdx]) {
        maxIdx = leftIdx
      }

      if (rightIdx < size && this.#heap[rightIdx] > this.#heap[maxIdx]) {
        maxIdx = rightIdx
      }

      if (maxIdx !== idx) {
        this.swap(idx, maxIdx)
        idx = maxIdx // Update index to the new swapped index
      } else {
        break
      }
    }
  }

  parent(idx) {
    return Math.floor((idx - 1) / 2)
  }

  leftChild(idx) {
    return 2 * idx + 1
  }

  rightChild(idx) {
    return 2 * idx + 2
  }

  swap(idx1, idx2) {
    ;[this.#heap[idx1], this.#heap[idx2]] = [this.#heap[idx2], this.#heap[idx1]]
  }

  getHeap() {
    return this.#heap
  }
}

const heap = new Heap()
heap.insert(99)
heap.insert(72)
heap.insert(61)
heap.insert(58)

console.log(heap.getHeap())

heap.insert(100)

console.log(heap.getHeap())
