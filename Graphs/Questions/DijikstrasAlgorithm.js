// Time Complexity: 𝑂((𝐸+𝑉)⋅log𝑉)O((E+V)⋅logV)
//Space Complexity: 𝑂(𝑉+𝐸)O(V+E)


class MinHeap {
  constructor() {
    this.heap = []
  }

  insert(node, priority) {
    this.heap.push({ node, priority })
    this.bubbleUp(this.heap.length - 1)
  }

  bubbleUp(idx) {
    let current = idx
    while (
      current > 0 &&
      this.heap[current].priority > this.heap[this.parent(current)].priority
    ) {
      this.swap(current, this.parent(current))
      current = this.parent(current)
    }
  }

  remove() {
    if (!this.heap.length === 0) {
      return null
    }

    if (this.heap.length === 1) {
      return this.heap.pop()
    }

    this.heap.pop()
    let min = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.bubbleDown(0)
    return min
  }

  bubbleDown(idx) {
    let size = this.heap.length

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
        this.swap(idx, min)
        idx = min
      } else {
        return
      }
    }
  }

  isEmpty() {
    return this.heap.length === 0
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

  swap(i, j) {
    ;[this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
  }
}

function dijkstra(graph, start) {
  const pq = new MinHeap()
  const distances = {}
  const previous = {}

  for (const node in graph) {
    distances[node] = Infinity
    previous[node] = null
  }

  distances[start] = 0
  pq.insert(start, 0)

  while (!pq.isEmpty()) {
    const { node: currentNode } = pq.remove()

    for (const [neighbor, weight] of Object.entries(graph[currentNode])) {
      const altDistance = distances[currentNode] + weight

      if (altDistance < distances[neighbor]) {
        distances[neighbor] = altDistance
        previous[neighbor] = currentNode
        pq.insert(neighbor, altDistance)
      }
    }
  }
  return { distances, previous }
}

function getPath(previous, end) {
  const path = []
  let current = end

  while (current !== null) {
    path.unshift(current)
    current = previous[current]
  }
  return path
}

const graph = {
  A: { B: 1, C: 4 },
  B: { A: 1, C: 2, D: 5 },
  C: { A: 4, B: 2, D: 1 },
  D: { B: 5, C: 1 },
}

const { distances, previous } = dijkstra(graph, 'A')

const shortestPath = getPath(previous, 'D')

console.log('Distances:', distances)
console.log('Shortest path from A to D:', shortestPath)
