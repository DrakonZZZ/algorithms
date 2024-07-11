// O(N)

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i
    }
  }
  return -1
}

const arr = [3, 2, 1, 5, 4]
const target = 4
console.log(linearSearch(arr, target))
