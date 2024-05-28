function findThreeLargestNumbers(arr) {
  let first = -Infinity
  let second = -Infinity
  let third = -Infinity

  for (const num of arr) {
    if (num > first) {
      third = second
      second = first
      first = num
    } else if (num > second) {
      third = second
      second = num
    } else {
      third = num
    }
  }
  return [first, second, third]
}

const arr = [10, 5, 9, 10, 12, 1, 20]
console.log(findThreeLargestNumbers(arr))
