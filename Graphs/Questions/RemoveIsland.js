// This concept is useful in image processing, map generation, and related domains.

function isWithBounds(grid, row, col) {
  return row >= 0 && row < grid.length && col >= 0 && col < grid[0].length
}

function markConnectLand(grid, row, col, visited) {
  if (
    !isWithBounds(grid, row, col) ||
    grid[row][col] === 0 ||
    visited[row][col]
  ) {
    return
  }

  visited[row][col] = true

  markConnectLand(grid, row - 1, col, visited) // up
  markConnectLand(grid, row + 1, col, visited) // down
  markConnectLand(grid, row, col - 1, visited) // left
  markConnectLand(grid, row, col + 1, visited) // right
}

function removeIslands(matrix) {
  if (grid.length === 0) {
    return grid
  }

  const rows = matrix.length
  const cols = matrix[0].length

  const visited = Array.from({ length: rows }, () => Array(cols).fill(false))

  for (let col = 0; col < cols; col++) {
    markConnectLand(grid, 0, col, visited)
    markConnectLand(grid, rows - 1, col, visited)
  }

  for (let row = 0; row < rows; row++) {
    markConnectLand(grid, row, 0, visited)
    markConnectLand(grid, row, cols - 1, visited)
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (!visited[row][col] && grid[row][col] === 1) {
        grid[row][col] = 0
      }
    }
  }

  return grid
}

const grid = [
  [1, 0, 0, 0, 0],
  [0, 1, 1, 0, 0],
  [0, 0, 0, 1, 0],
  [1, 0, 0, 0, 0],
  [0, 0, 1, 1, 0],
]

const newGrid = removeIslands(grid)

console.log('Modified grid:')
console.table(newGrid)
