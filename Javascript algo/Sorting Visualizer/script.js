import { selectionSort } from './algo/selectionSort.js'
import { bubbleSort } from './algo/sortingAlgorithm.js'

export let arr1 = [],
  arr2 = []

// Function to generate a random array
const generateArray = (size = 20) => {
  arr1 = []
  arr2 = [] // Clear the array before generating a new one
  console.log(arr2)
  for (let i = 0; i < size; i++) {
    arr1.push(Math.floor(Math.random() * 100) + 1)
  }
  arr2 = [...arr1]
  displayArray()
}

const createBar = (value, arrayLength) => {
  const bar = document.createElement('div')
  bar.classList.add('array-bar')
  bar.style.width = `${80 / arrayLength}%` // Set width based on array length
  bar.style.height = `${value * 3}px` // Set height based on array value
  bar.innerText = value // Display the value inside the bar
  return bar
}

// Function to display the arrays in both containers
const displayArray = () => {
  arrayContainer1.innerHTML = '' // clear the container
  arrayContainer2.innerHTML = ''

  for (let i = 0; i < arr1.length; i++) {
    const bar1 = createBar(arr1[i], arr1.length)
    const bar2 = createBar(arr2[i], arr2.length)
    arrayContainer1.appendChild(bar1)
    arrayContainer2.appendChild(bar2)
  }
}

// Event listeners
const arrayContainer1 = document.querySelector('.array-container-1')
const arrayContainer2 = document.querySelector('.array-container-2')
document.getElementById('generateArray').addEventListener('click', function () {
  generateArray()
})
document.getElementById('bubbleSort').addEventListener('click', function () {
  bubbleSort()
})
document.getElementById('selectionSort').addEventListener('click', function () {
  selectionSort()
})

// Initially generating an array at startup
generateArray()
