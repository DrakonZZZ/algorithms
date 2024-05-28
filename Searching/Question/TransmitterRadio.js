function hackerlandRadioTransmitters(x, k) {
  // Sort the array of house locations
  x.sort((a, b) => a - b)

  let i = 0
  let numTransmitters = 0
  const n = x.length

  while (i < n) {
    numTransmitters++
    let loc = x[i] + k // place the transmitter within range

    // Move to the rightmost house within range of the current transmitter
    while (i < n && x[i] <= loc) {
      i++
    }

    // Now, place the transmitter at the last house within the range
    loc = x[i - 1] + k

    // Move to the rightmost house covered by the transmitter
    while (i < n && x[i] <= loc) {
      i++
    }
  }

  return numTransmitters
}

// Sample Input
const x1 = [1, 2, 3, 4, 5]
const k1 = 1
console.log(hackerlandRadioTransmitters(x1, k1)) // Output: 2

const x2 = [7, 2, 4, 6, 5, 9, 12, 11]
const k2 = 2
console.log(hackerlandRadioTransmitters(x2, k2)) // Output: 3
