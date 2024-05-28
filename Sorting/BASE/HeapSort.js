// O(n log(n))

function heapify(arr, n, i) {
  let largest = i // Initialize largest as root
  const left = 2 * i + 1 // Left child index
  const right = 2 * i + 2 // Right child index

  if (left < n && arr[left] > arr[largest]) {
    // Corrected condition
    largest = left
  }

  // Check if right child is larger than largest
  if (right < n && arr[right] > arr[largest]) {
    // Corrected condition
    largest = right
  }

  if (largest !== i) {
    ;[arr[i], arr[largest]] = [arr[largest], arr[i]]
    heapify(arr, n, largest)
  }
}

function heapSort(arr) {
  const n = arr.length

  for (let i = Math.floor((n - 1) / 2); i >= 0; i--) {
    heapify(arr, n, i)
  }

  console.log('mid: ', arr)

  for (let i = n - 1; i > 0; i--) {
    ;[arr[0], arr[i]] = [arr[i], arr[0]]

    heapify(arr, i, 0)
  }

  return arr
}

const arr = [12, 11, 13, 5, 6, 7]
console.log('Sorted array:', heapSort(arr)) // Output: [5, 6, 7, 11, 12, 13]
