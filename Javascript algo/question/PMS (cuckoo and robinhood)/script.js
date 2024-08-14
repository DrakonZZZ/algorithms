import { CuckooHashing } from './misc/cuckoo.js'
import { RobinHoodHashing } from './misc/robinhood.js'

const cuckooHashing = new CuckooHashing(10)
const robinhoodHashing = new RobinHoodHashing(10)

function hashCode(str) {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash |= 0
  }
  return Math.abs(hash)
}

function displayMessage(msg) {
  const resultContainer = document.getElementById('result')
  resultContainer.innerHTML = msg
}

const addPass = document.getElementById('add-password')
const searchPass = document.getElementById('search-password')
const delPass = document.getElementById('delete-password')

addPass.addEventListener('click', () => {
  const username = document.getElementById('username').value
  const password = document.getElementById('password').value
  const hashMethod = document.getElementById('hash-method').value
  const key = hashCode(username)

  if (hashMethod === 'cuckoo') {
    cuckooHashing.insert(key, password)
  } else if (hashMethod === 'robinhood') {
    robinhoodHashing.insert(key, password)
  }

  displayMessage('Password Added Successfully')
})

searchPass.addEventListener('click', () => {
  const username = document.getElementById('username').value
  const hashMethod = document.getElementById('hash-method').value
  const key = hashCode(username)
  let passwordData

  if (hashMethod === 'cuckoo') {
    passwordData = cuckooHashing.search(key)
  } else {
    passwordData = robinhoodHashing.search(key)
  }

  if (passwordData) {
    displayMessage(`Password for ${username} is ${passwordData}`)
  } else {
    displayMessage(`No password found for ${username}`)
  }
})

delPass.addEventListener('click', () => {
  const username = document.getElementById('username').value
  const hashMethod = document.getElementById('hash-method').value
  const key = hashCode(username)

  if (hashMethod === 'cuckoo') {
    cuckooHashing.delete(key)
  } else {
    robinhoodHashing.delete(key)
  }

  displayMessage('Password Deleted Successfully')
})
