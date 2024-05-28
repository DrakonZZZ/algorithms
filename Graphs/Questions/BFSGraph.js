const Graph = require('../Base/GraphWithAdjList')
const graph = new Graph()

function BFS(adjList, start) {
  const queue = [start]
  const result = []
  const visited = new Set()

  visited.add(start)

  while (queue.length) {
    const current = queue.shift()
    result.push(current)

    for (let neighbour of adjList[current]) {
      if (!visited.has(neighbour)) {
        visited.add(neighbour)
        queue.push(neighbour)
      }
    }
  }

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

const adjacenyList = graph.getGraph()
const start = 'B'
const bfsResult = BFS(adjacenyList, start)
console.log(`BFS traversal from ${start}: ${bfsResult}`)
