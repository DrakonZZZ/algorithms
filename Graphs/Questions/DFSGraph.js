const Graph = require('../Base/GraphWithAdjList')
const graph = new Graph()

function dfsTraversal(matrix, v, result, visited) {
  if (!v || visited.has(v)) {
    return
  }

  visited.add(v)
  result.push(v)

  for (let neighbour of matrix[v]) {
    if (!visited.has(neighbour)) {
      dfsTraversal(matrix, neighbour, result, visited)
    }
  }
}

function DFS(matrix, start) {
  const visited = new Set()
  const result = []
  dfsTraversal(matrix, start, result, visited)
  return result
}

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')

graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('B', 'D')
graph.addEdge('C', 'D')

const matrix = graph.getGraph()

const dfsResult = DFS(matrix, 'A')
console.log('DFS traversal:', dfsResult)
