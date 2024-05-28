function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}

const arr = [5, 3, 8, 4, 2, 1]
console.log('unsorted array', arr)
const sortArr = bubbleSort(arr)
console.log('sorted array', sortArr)
