// Graph class using an adjacency list
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

// Recursive DFS function
function recursiveDFS(graph, start, visited = new Set()) {
  // Mark the start node as visited
  visited.add(start)

  console.log('Visited:', start)

  // Explore each neighbor of the start node
  const neighbors = graph.adjacencyList[start]
  for (const neighbor of neighbors) {
    if (!visited.has(neighbor)) {
      recursiveDFS(graph, neighbor, visited) // Recurse into unvisited neighbors
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

recursiveDFS(graph, 'A')
