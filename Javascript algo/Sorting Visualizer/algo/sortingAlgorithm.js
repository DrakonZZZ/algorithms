import { arr1 } from '../script.js'

export const bubbleSort = async () => {
  const bars = document.getElementsByClassName('array-bar')
  const timeDisplay = document.getElementById('bubbleSortingTime')
  if (arr1.length <= 0) return

  const startTime = performance.now()
  for (let i = 0; i < arr1.length - 1; i++) {
    for (let j = 0; j < arr1.length - i - 1; j++) {
      // highlight the bars being compared
      bars[j].style.background = 'yellow'
      bars[j + 1].style.background = 'yellow'

      await new Promise((res) => setTimeout(res, 10))

      if (arr1[j] > arr1[j + 1]) {
        // swap the elements in the array
        swap(j, j + 1)

        bars[j].style.height = `${arr1[j] * 3}px`
        bars[j + 1].style.height = `${arr1[j + 1] * 3}px`

        bars[j].innerText = arr1[j]
        bars[j + 1].innerText = arr1[j + 1]
      }

      bars[j].style.background = '#de65d1'
      bars[j + 1].style.background = '#de65d1'
    }

    // mark the last sorted element in the current pass as sorted (green)
    bars[arr1.length - i - 1].style.background = '#591d53'
    bars[arr1.length - i - 1].style.color = 'yellow'
  }
  const endTime = performance.now()
  timeDisplay.innerText = `sorting duration: ${(endTime - startTime).toFixed(
    2
  )} ms`
}

// helper function to swap elements in the array
const swap = (idx1, idx2) => {
  ;[arr1[idx1], arr1[idx2]] = [arr1[idx2], arr1[idx1]]
}
