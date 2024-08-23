// levels in a graph

const adjacencyMatrix = [
  [0, 1, 1, 0],
  [1, 0, 0, 1],
  [1, 0, 0, 1],
  [0, 1, 1, 0],
]

function BFS(matrix, v) {
  const queue = [v]
  const result = []
  // tracking the visited value
  const visited = new Array(matrix.length).fill(false)
  while (queue.length) {
    const current = queue.shift()
    result.push(current)

    for (let i = 0; i < matrix.length; i++) {
      if (matrix[current][i] === 1 && !visited[i]) {
        visited[i] = true
        queue.push(i)
      }
    }
  }

  return result
}

const v = 0
const bfsResult = BFS(adjacencyMatrix, v)
console.log(bfsResult)
