function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = current
  }
  return arr
}

function merge(arr1, arr2) {
  const combined = []
  let i = 0
  let j = 0

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      combined.push(arr1[i])
      i++
    } else {
      combined.push(arr2[j])
      j++
    }
  }

  while (i < arr1.length) {
    combined.push(arr1[i])
    i++
  }

  while (j < arr2.length) {
    combined.push(arr2[j])
    j++
  }

  return combined
}

function mergeSort(arr) {
  const THRESHOLD = 5
  if (arr.length <= THRESHOLD) {
    return insertionSort(arr)
  }

  const mid = Math.floor(arr.length / 2)
  const left = mergeSort(arr.slice(0, mid))
  const right = mergeSort(arr.slice(mid))

  return merge(left, right)
}

// Example usage:
const arr = [38, 27, 43, 3, 9, 82, 10]
console.log(mergeSort(arr))
