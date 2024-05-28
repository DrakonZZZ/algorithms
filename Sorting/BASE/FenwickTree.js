class FenwickTree {
  constructor(size) {
    this.tree = new Array(size + 1).fill(0)
  }

  update(index, delta) {
    while (index < this.tree.length) {
      this.tree[index] += delta
      index += index & -index
    }
  }

  query(index) {
    let sum = 0
    while (index > 0) {
      sum += this.tree[index]
      index -= index & -index
    }
    return sum
  }
}

function insertionSortShiftsAndSortedArray(arr) {
  const n = arr.length
  const maxElement = Math.max(...arr)
  const fenwickTree = new FenwickTree(maxElement)

  let shifts = 0
  const sortedArray = []

  // Iterate through the original array from left to right
  for (let i = 0; i < n; i++) {
    const current = arr[i]
    // Find how many elements are smaller or equal to the current one to get its correct index
    index = fenwickTree.query(current - 1)
    // Calculate how many shifts have occurred by the time the current element is placed
    shifts += i - index
    // Insert the current element in the sorted array at its correct position
    sortedArray.splice(index, 0, current)
    // Update the Fenwick Tree to mark this element
    fenwickTree.update(current, 1)
  }

  return { shifts, sortedArray }
}

// Test cases
const result = insertionSortShiftsAndSortedArray([2, 1, 3, 1, 2])
console.log('Shifts:', result.shifts) // Output: 4
console.log('Sorted array:', result.sortedArray)
