const directions = [
  [1, 0], // down
  [-1, 0], // up
  [0, 1], // right
  [0, -1], // left
]

function dfs(matrix, visited, row, col, sizes) {
  if (row < 0 || col < 0 || row >= matrix.length || col >= matrix[0].length) {
    return 0 // Out of bounds
  }

  if (matrix[row][col] === 0 || visited[row][col]) {
    return 0 // Not a river or already visited
  }

  visited[row][col] = true
  let size = 1 // Start with current cell

  // Explore all four possible directions
  for (const [dr, dc] of directions) {
    const newRow = row + dr // Adjust the row
    const newCol = col + dc // Adjust the column
    size += dfs(matrix, visited, newRow, newCol) // Recursive call
  }

  sizes.push(size)
}

function getRiverSizes(matrix) {
  const sizes = []
  const visited = Array.from({ length: matrix.length }, () =>
    Array(matrix[0].length).fill(false)
  )

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === 1 && !visited[row][col]) {
        dfs(matrix, visited, row, col, sizes)
      }
    }
  }

  return sizes // Return all the river sizes
}

const matrix = [
  [1, 0, 1, 1, 0, 0],
  [0, 1, 1, 0, 1, 0],
  [1, 1, 0, 0, 1, 1],
  [0, 0, 1, 0, 0, 0],
]

const riverSizes = getRiverSizes(matrix)
console.log(riverSizes) // Expected output: [2, 4, 3, 2]
