import { arr } from '../script.js'

export const bubbleSort = async () => {
  const bars = document.getElementsByClassName('array-bar')
  if (arr.length <= 0) return
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      // highlight the bars being compared
      bars[j].style.background = 'yellow'
      bars[j + 1].style.background = 'yellow'

      await new Promise((res) => setTimeout(res, 100))

      if (arr[j] > arr[j + 1]) {
        // Swap the elements in the array
        swap(j, j + 1)

        bars[j].style.height = `${arr[j] * 3}px`
        bars[j + 1].style.height = `${arr[j + 1] * 3}px`

        bars[j].innerText = arr[j]
        bars[j + 1].innerText = arr[j + 1]
      }

      bars[j].style.background = '#912d8a'
      bars[j + 1].style.background = '#912d8a'
    }

    // Mark the last sorted element in the current pass as sorted (green)
    bars[arr.length - i - 1].style.background = 'green'
  }
}

// Helper function to swap elements in the array
const swap = (idx1, idx2) => {
  ;[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}
