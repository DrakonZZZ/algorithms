function flatten(arr, newArr = []) {
  for (let a of arr) {
    if (Array.isArray(a)) {
      // If the current element is an array, recursively flatten it
      flatten(a, newArr)
    } else {
      // If it's not an array, add it to newArr
      newArr.push(a)
    }
  }
  return newArr // Return the final flattened array
}

// Testing the flatten function with a nested array
console.log(flatten([1, 2, [3, 4, [5, 6, 7], 8], 9, 10]))
