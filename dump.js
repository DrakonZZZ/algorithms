class PriorityQueue {
  constructor() {
    this.heap = []
  }

  parentIdx(idx) {
    return Math.floor((idx - 1) / 2)
  }

  leftChild(idx) {
    return 2 * idx + 1
  }

  rightChild(idx) {
    return 2 * idx + 2
  }

  insert(v, priority) {
    this.heap.push({ v, priority })
    let current = this.heap.length - 1
    this.bubbleUp(current)
  }

  swap(idx1, idx2) {
    ;[this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]]
  }

  bubbleUp(idx) {
    while (idx > 0) {
      const parentIdx = this.parentIdx(idx)

      if (this.heap[idx] < this.heap[parentIdx]) {
        this.swap(idx, parentIdx)
        idx = parentIdx
      } else {
        break
      }
    }
  }

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
    const length = this.heap.length

    while (true) {
      let leftChildIdx = this.leftChild(idx)
      let rightChildIdx = this.rightChild(idx)
      let smallest = idx

      if (
        leftChildIdx < length &&
        this.heap[leftChildIdx].priority < this.heap[smallest].priority
      ) {
        smallest = leftChildIdx
      }

      if (
        rightChildIdx < length &&
        this.heap[rightChildIdx].priority < this.heap[smallest].priority
      ) {
        smallest = rightChildIdx
      }

      if (smallest !== idx) {
        this.swap(idx, smallest)
        idx = smallest
      } else {
        break
      }
    }
  }

  isEmpty() {
    return this.heap.length === 0
  }
}

class Graph {
  constructor() {
    this.adjacencyList = []
  }

  addVertex(v) {
    if (!this.adjacencyList[v]) {
      this.adjacencyList[v] = []
    }
  }

  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({ node: v2, weight })
    this.adjacencyList[v2].push({ node: v1, weight })
  }

  dijkstra(start) {
    const distances = {};
    const pq = new PriorityQueue();
    const previous = {};

    for(const v of this.adjacencyList){
        distances[v] = vertex === start ? 0 : Infinity;
        previous[v] = null;
        pq.insert(v, distances[v]);
    }

    while(pq.isEmpty()){
        const {vertex: currentVertex} = pq.remove();

        for(const neighbor of this.adjacencyList[currentVertex]){
            const {node, weight} = neighbor;
            const currentDistance = distances[currentVertex] + weight;
        }
    }
  }
}

const graph = new Graph()

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')

graph.addEdge('A', 'B', 1)
graph.addEdge('A', 'C', 4)
graph.addEdge('B', 'C', 2)
graph.addEdge('B', 'D', 5)
graph.addEdge('C', 'D', 1)
graph.addEdge('D', 'E', 3)

const { distances, previous } = graph.dijkstra('A')
console.log('Distances:', distances)
