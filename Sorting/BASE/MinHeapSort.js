function swap(arr, idx1, idx2) {
  ;[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

function heapify(arr, length, i) {
  let max = i
  let left = 2 * i + 1
  let right = 2 * i + 2

  if (left < length && arr[left] < arr[max]) {
    max = left
  }

  if (right < length && arr[right] < arr[max]) {
    max = right
  }

  if (max !== i) {
    swap(arr, i, max)
    heapify(arr, length, max)
  }
}

function heapSort(arr) {
  const length = arr.length

  for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
    heapify(arr, length, i)
  }

  for (let i = length - 1; i >= 0; i--) {
    heapify(arr, i, 0)
  }

  return arr
}

const arr = [12, 11, 13, 5, 6, 7]
console.log('Sorted Array', heapSort(arr))
