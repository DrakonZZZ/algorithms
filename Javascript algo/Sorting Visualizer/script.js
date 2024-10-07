import { bubbleSort } from './algo/sortingAlgorithm.js'

export let arr = []

// Function to generate a random array
const generateArray = (size = 20) => {
  arr = [] // Clear the array before generating a new one
  for (let i = 0; i < size; i++) {
    arr.push(Math.floor(Math.random() * 100) + 1)
  }
  displayArray()
}

// Function to display the array as bars in the DOM
const displayArray = () => {
  arrayContainer.innerHTML = '' // Clear the generated array before reinitialization

  for (let i = 0; i < arr.length; i++) {
    const bar = document.createElement('div')
    bar.classList.add('array-bar')

    // Styling
    bar.style.width = `${100 / arr.length}%`
    bar.style.height = `${arr[i] * 3}px` // Adjust height based on array value
    bar.innerText = arr[i]
    arrayContainer.appendChild(bar)
  }
}

// Event listeners
const arrayContainer = document.getElementById('array')
document.getElementById('generateArray').addEventListener('click', function () {
  generateArray()
})
document.getElementById('bubbleSort').addEventListener('click', function () {
  bubbleSort()
})

// Initially generating an array at startup
generateArray()
