function merge(arr1, arr2) {
  let i = 0
  let j = 0
  let combined = []
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

  return arr
}

function mergeSplit(arr, left, right) {
  if (left >= right) {
    return [arr[left]]
  }

  let mid = Math.floor((left + right) / 2)
  let leftArr = mergeSplit(arr, left, mid)
  let rightArr = mergeSplit(arr, mid + 1, right)
  return merge(leftArr, rightArr)
}

function mergeSort(arr) {
  return mergeSplit(arr, 0, arr.length - 1)
}

const arr = [38, 27, 43, 3, 9, 82, 10]
console.log(mergeSort(arr))
