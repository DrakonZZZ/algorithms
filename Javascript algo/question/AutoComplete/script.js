import { Trie } from './util/Trie.js'
import { singers } from './data.js'

const trie = new Trie()

function indexData(keywords) {
  for (const keyword of keywords) {
    trie.insert(keyword.toLowerCase())
  }
}

indexData(singers)

function search() {
  const input = document.getElementById('search-input').value.toLowerCase()
  const resultsContainer = document.getElementById('results')

  // Clear previous results
  resultsContainer.innerHTML = ''

  if (!input) {
    resultsContainer.innerHTML = 'Please enter a singer name to search.'
    return
  }

  const result = trie.autoComplete(input)

  if (result && result.length > 0) {
    const ul = document.createElement('ul')

    result.forEach((singer) => {
      const li = document.createElement('li')
      li.textContent = singer
      ul.appendChild(li)
    })

    resultsContainer.appendChild(ul)
  } else {
    resultsContainer.innerHTML = `No singer found for keyword: ${input}`
    console.log(`No singer found for keyword: ${input}`)
  }
}

// Add event listeners
const inputElement = document.getElementById('search-input')
const searchBtn = document.getElementById('search-btn')

searchBtn.addEventListener('click', search)
inputElement.addEventListener('input', search)
