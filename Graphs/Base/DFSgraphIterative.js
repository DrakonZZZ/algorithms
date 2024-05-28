class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = []
    }
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2)
      this.adjacencyList[vertex2].push(vertex1) // Undirected edge
    }
  }

  getVertices() {
    return Object.keys(this.adjacencyList)
  }
}

function iterativeDFS(graph, start) {
  const stack = [stack]
  const visited = new Set()

  while (stack.length) {
    const current = stack.pop()

    if (!visited.has(current)) {
      visited.add(current)

      const neigbors = graph.adjacencyList[current]

      for (let n of neigbors) {
        if (!visited.has(n)) {
          stack.push(n)
        }
      }
    }
  }
}

// Example usage
const graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('B', 'D')

iterativeDFS(graph, 'A')
