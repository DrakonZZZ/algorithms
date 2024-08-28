class Graph {
  constructor(vertices) {
    this.vertices = vertices
    this.adjacenyList = {}
  }

  addVertex(v) {
    if (!this.adjacenyList[v]) {
      this.adjacenyList[v] = []
    }
  }

  addEdge(v1, v2) {
    if (this.adjacenyList[v1] && this.adjacenyList[v2]) {
      this.adjacenyList[v1].push(v2) // Directed edge from v1 to v2
    }
  }

  topologicalSort() {
    const visited = new Set()
    const result = []

    const dfs = (node) => {
      visited.add(node)

      const neighbours = this.adjacenyList[node]
      for (let neighbour of neighbours) {
        if (!visited.has(neighbour)) {
          dfs(neighbour)
        }
      }

      result.push(node)
    }

    for (let neighbour of Object.keys(this.adjacenyList)) {
      if (!visited.has(neighbour)) {
        dfs(neighbour)
      }
    }

    return result.reverse()
  }
}

const graph = new Graph(6)
const vertices = ['A', 'B', 'C', 'D', 'E', 'F']

vertices.forEach((vertex) => graph.addVertex(vertex))

graph.addEdge('A', 'C')
graph.addEdge('B', 'C')
graph.addEdge('B', 'D')
graph.addEdge('C', 'E')
graph.addEdge('E', 'F')
graph.addEdge('D', 'F')

const topoSort = graph.topologicalSort()
console.log('Topological Sort:', topoSort)
