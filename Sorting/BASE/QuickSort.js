function swap(arr, idx1, idx2) {
  ;[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

function pivot(arr, start = 0, end = arr.length - 1) {
  let pivotIdx = start

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < arr[pivot]) {
      pivotIdx++
      swap(arr, i, pivotIdx)
    }
  }

  swap(arr, start, pivotIdx)
  return pivotIdx
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right)
    quickSort(arr, left, pivotIdx - 1)
    quickSort(arr, pivotIdx + 1, right)
  }

  return arr
}

const arr = [4, 2, 7, 1, 3, 5, 6]
console.log('Original array:', arr)
const sortedArr = quickSort(arr.slice())
console.log('Sorted array:', sortedArr)
