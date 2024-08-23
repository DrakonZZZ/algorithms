const graphList = {
  A: ['B', 'C'],
  B: ['A', 'D'],
  C: ['A', 'D'],
  D: ['B', 'C'],
}

function DFS(adjacencyList, start) {
  const visited = new Set()
  const result = []

  // recursive function
  function dfs(v) {
    if (!v || visited.has(v)) return

    visited.add(v)
    result.push(v)

    for (let neighbour of adjacencyList[v]) {
      if (!visited[neighbour]) {
        dfs(neighbour)
      }
    }
  }

  dfs(start)
  return result
}

const dfsResult = DFS(graphList, 'A')
console.log('DFS Traversal (Adjacency List):', dfsResult) // Output: ['A', 'B', 'D', 'C']
