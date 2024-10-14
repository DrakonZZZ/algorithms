import { arr3 } from '../script.js'

export const insertionSort = async () => {
  const timeDisplay = document.getElementById('InsertionSortingTime') // Get the time display element
  const startTime = performance.now()

  const bars = document.querySelectorAll('.array-container-3 .array-bar') // Select all bars

  if (arr3.length <= 0) return

  for (let i = 1; i < arr3.length; i++) {
    let j = i - 1
    let key = arr3[i]

    bars[i].style.background = 'yellow' // highlight the current bar

    await new Promise((res) => setTimeout(res, 100)) // intentional delay for visualization

    // shift elements greater than the key
    while (j >= 0 && arr3[j] > key) {
      arr3[j + 1] = arr3[j]
      bars[j + 1].style.height = `${arr3[j] * 3}px` // Update height
      bars[j + 1].innerText = arr3[j] // Update text

      bars[j + 1].style.background = '#912d8a' // Recolor the bars being compared
      j--
    }

    // Insert the key in its correct position
    arr3[j + 1] = key
    bars[j + 1].style.height = `${key * 3}px` // Update height for the key
    bars[j + 1].innerText = key // Update text

    bars[j + 1].style.background = 'green'
  }

  const endTime = performance.now() // End the timer
  const elapsedTime = endTime - startTime // Calculate elapsed time

  timeDisplay.innerText = `Sorting completed in ${elapsedTime.toFixed(2)} ms` // Display time taken
}
