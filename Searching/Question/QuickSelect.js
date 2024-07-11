// time complexity 0(n)

function swap(arr, idx1, idx2) {
  ;[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

function pivot(arr, start, end) {
  let pivotValue = arr[start]
  let swapIdx = start

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivotValue) {
      swapIdx++
      swap(arr, swapIdx, i)
    }
  }

  swap(arr, start, swapIdx)
  return swapIdx
}

function quickSelectionHelper(arr, left, right, k) {
  if (left <= right) {
    const pivotIdx = pivot(arr, left, right)

    if (pivotIdx === k) {
      return arr[k]
    } else if (k < pivotIdx) {
      return quickSelectionHelper(arr, left, pivotIdx - 1, k)
    } else {
      return quickSelectionHelper(arr, pivotIdx + 1, right, k)
    }
  }
}

function quickSelect(arr, k) {
  if (k < 0 || k >= arr.length) {
    return // Out of bounds
  }

  return quickSelectionHelper(arr, 0, arr.length - 1, k)
}

const arr = [3, 2, 1, 5, 4]
const k = 2
console.log(quickSelect(arr, k - 1)) //zero based indexing
