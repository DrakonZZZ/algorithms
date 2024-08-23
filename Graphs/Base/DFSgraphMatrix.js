const adjacencyMatrix = [
  [0, 1, 1, 0], // A
  [1, 0, 0, 1], // B
  [1, 0, 0, 1], // C
  [0, 1, 1, 0], // D
]

function DFS(adjacencyMatrix, start) {
  const visited = new Array(adjacencyMatrix.length).fill(false)
  const result = []

  function dfs(node) {
    visited[node] = true
    result.push(node)

    for (
      let neighbor = 0;
      neighbor < adjacencyMatrix[node].length;
      neighbor++
    ) {
      if (adjacencyMatrix[node][neighbor] === 1 && !visited[neighbor]) {
        dfs(neighbor) // Recurse for unvisited neighbors
      }
    }
  }

  dfs(start)
  return result
}

const nodeMap = { A: 0, B: 1, C: 2, D: 3 }
const dfsResult = DFS(adjacencyMatrix, nodeMap['A'])

// Mapping the result back to node names
const reverseNodeMap = ['A', 'B', 'C', 'D']
const traversalResult = dfsResult.map((nodeIndex) => reverseNodeMap[nodeIndex])

console.log('DFS Traversal (Adjacency Matrix):', traversalResult)
