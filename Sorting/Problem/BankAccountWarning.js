function findMedian(count, d) {
  let step = 0

  if (d % 2 === 1) {
    const med = Math.floor(d / 2) + 1

    for (let i = 0; i < count.length; i++) {
      step += count[i]
      if (step >= med) {
        return i
      }
    }
  } else {
    const medianPos1 = Math.floor(d / 2)
    const medianPos2 = medianPos1 + 1
    let median1 = null
    let median2 = null

    for (let i = 0; i < count.length; i++) {
      step += count[i]

      if (median1 === null && count >= medianPos1) {
        median1 = i
      }
      if (median2 === null && count >= medianPos2) {
        median2 = i
      }
      if (median1 !== null && median2 !== null) {
        break;
      }
    }
    return (median1 + median2) / 2
  }
}

function activityNotifications(arr, d) {
  const max = Math.max(...arr)
  const count = new Array(max).fill(0)

  for (const num of arr) {
    count[num]++
  }

  let notification = 0

  for (let i = d; i < arr.length; i++) {
    let median = findMedian(count, d);

    if(arr[i] >= 2 * median){
        notification++;
    }

    count[arr[i - d]]--;
    count[arr[i]]++;
  }
}

console.log(activityNotifications([2, 3, 4, 2, 3, 6, 8, 4, 5], 5))
console.log(activityNotifications([1, 2, 3, 4, 4], 4))
