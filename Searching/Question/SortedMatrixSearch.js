function searchMatrix(matrix, target) {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return [-1, -1]
  }

  let matrix = matrix.length
  let numCols = matrix[0].length
  let numRow = matrix.length
  let i = 0
  let j = numCols - 1
  while (i < numRow && j >= 0) {
    if (matrix[i][j] === target) {
      return [i, j]
    } else if (matrix[i][j] > target) {
      j--
    } else {
      i++
    }
  }
  return [-1, -1]
}

const matrix = [
  [10, 20, 30, 40],
  [15, 25, 35, 45],
  [27, 29, 37, 48],
  [32, 33, 39, 50],
]
const target = 29
const result = searchMatrix(matrix, target)
console.log(result)
