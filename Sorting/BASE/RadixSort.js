function countingSort(arr, exp) {
  const n = arr.length
  const output = new Array(n).fill(0)
  const count = new Array(10).fill(0)

  for (let i = 0; i < n; i++) {
    const index = Math.floor(arr[i] / exp) % 10
    count[index]++
  }

  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1]
  }

  for (let i = n - 1; i >= 0; i--) {
    const index = Math.floor(arr[i] / exp) % 10
    output[count[index] - 1] = arr[i]
    count[index]--
  }

  for (let i = 0; i < n; i++) {
    arr[i] = output[i]
  }
}

function radixSort(arr) {
  const max = Math.max(...arr)

  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    countingSort(arr, exp)
  }

  return arr
}

const arr = [170, 45, 75, 90, 802, 24, 2, 66]
console.log('Original array:', arr)
console.log('Sorted array:', radixSort(arr))
