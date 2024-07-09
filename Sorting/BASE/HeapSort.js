// O(n log(n))

function swap(arr, idx1, idx2) {
  ;[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

function heapify(arr, length, i) {
  let largest = i
  let left = 2 * i + 1
  let right = 2 * i + 2

  if (left < length && arr[left] > arr[largest]) {
    largest = left
  }

  if (right < length && arr[right] > arr[largest]) {
    largest = right
  }

  if (largest !== i) {
    swap(arr, i, largest)
    heapify(arr, length, largest)
  }
}

function heapSort(arr) {
  let length = arr.length

  for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
    heapify(arr, length, i)
  }

  for (let i = length - 1; i >= 0; i--) {
    swap(arr, 0, i)
    heapify(arr, i, 0)
  }

  return arr
}

const arr = [4, 2, 7, 1, 3, 5, 6]
console.log('Original array:', arr)
const sortedArr = heapSort(arr.slice()) //to avoid mutation of the original array
console.log('Sorted array:', sortedArr)
