function swap(arr, idx1, idx2) {
  ;[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

function pivot(arr, pivotIdx, end) {
  let swapIdx = pivotIdx

  for (let i = pivotIdx + 1; i <= end; i++) {
    if (arr[i] < arr[pivotIdx]) {
      swapIdx++
      swap(arr, i, swapIdx)
    }
  }
  swap(arr, pivotIdx, swapIdx)
  return swapIdx
}

function quickSelectHelper(arr, left, right, k) {
  if (left <= right) {
    const pivotIdx = pivot(arr, left, right)

    if (pivotIdx === k) {
      return arr[k]
    } else if (k < pivotIdx) {
      return quickSelectHelper(arr, left, pivotIdx - 1, k)
    } else {
      return quickSelectHelper(arr, pivotIdx + 1, right, k)
    }
  }
  return -1
}

function quickSelect(arr, k) {
  if (k < 0 || k >= arr.length) {
    throw new Error('k is out of bounds')
  }

  return quickSelectHelper(arr, 0, arr.length - 1, k)
}

// Example usage:
const arr = [3, 2, 1, 5, 4]
const k = 2 // Finding the 3rd smallest element (0-based index)
const result = quickSelect(arr, k)
console.log(result) // Output: 3
