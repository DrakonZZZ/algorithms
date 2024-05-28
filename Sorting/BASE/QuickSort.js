function swap(arr, idx1, idx2) {
  ;[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

function pivot(arr, pivotIdx = 0, end = arr.length - 1) {
  let swapIdx = pivotIdx

  for (let i = pivotIdx; i < end; i++) {
    if (arr[i] < arr[pivotIdx]) {
      swapIdx++
      swap(arr, i, swapIdx)
    }
  }
  swap(arr, pivotIdx, swapIdx)
  return swapIdx
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right)
    quickSort(arr, left, pivotIdx - 1)
    quickSort(arr, pivotIdx + 1, right)
  }
  return arr
}
