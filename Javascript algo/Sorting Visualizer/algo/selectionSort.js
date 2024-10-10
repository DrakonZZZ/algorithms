import { arr2 } from '../script.js' // Ensure the correct path is used

export const selectionSort = async () => {
  const timeDisplay = document.getElementById('SelectionSortingTime') // Get the time display element
  const startTime = performance.now() // Start the timer

  const bars = document.querySelectorAll('.array-container-2 .array-bar')

  console.log(bars)
  if (arr2.length <= 0) return

  for (let i = 0; i < arr2.length - 1; i++) {
    let minIndex = i

    for (let j = i + 1; j < arr2.length; j++) {
      bars[j].style.background = 'yellow'
      await new Promise((res) => setTimeout(res, 10))

      // Find the minimum element in the unsorted array
      if (arr2[j] < arr2[minIndex]) {
        if (minIndex !== i) {
          // Reset the color for the previous min index
          bars[minIndex].style.background = '#912d8a'
        }
        minIndex = j
        bars[minIndex].style.background = 'yellow' // Highlight the new minimum
      } else {
        bars[j].style.background = '#912d8a' // Reset the color
      }
    }

    // Swap the found minimum element with the first element of the unsorted array
    swap(i, minIndex)

    // Update the height and text of the bars
    bars[i].style.height = `${arr2[i] * 3}px`
    bars[i].innerText = arr2[i]
    bars[minIndex].style.height = `${arr2[minIndex] * 3}px`
    bars[minIndex].innerText = arr2[minIndex]

    // Mark the sorted element
    bars[i].style.background = '#591d53'
    bars[i].style.color = 'yellow'
  }

  const endTime = performance.now()
  const elapsedTime = endTime - startTime

  timeDisplay.innerText = `Sorting completed in ${elapsedTime.toFixed(2)} ms`
}

// Helper function to swap elements in the array
const swap = (idx1, idx2) => {
  ;[arr2[idx1], arr2[idx2]] = [arr2[idx2], arr2[idx1]]
}
