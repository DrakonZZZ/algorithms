function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let current = i
    let j
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[current]) {
        current = j
      }
    }
    if (i !== current) {
      ;[arr[i], arr[current]] = [arr[current], arr[i]]
    }
  }
  return arr
}

const arr = [5, 3, 8, 4, 2, 1]
console.log('Unsorted array:', arr)
const sortedArr = selectionSort(arr)
console.log('Sorted array:', sortedArr)
