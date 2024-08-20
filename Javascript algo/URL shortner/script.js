import { LinearProbingHash, hashCode } from './LinearProbing.js'

const linearProbing = new LinearProbingHash(50)

const baseURL = 'https://short.link/'

function generateShortURL(key) {
  const hash = hashCode(key)
  const shortURL = baseURL + (hash % 1000).toString()
  return shortURL
}

function addUrl(longUrl) {
  const shortUrl = generateShortURL(longUrl)
  linearProbing.insert(shortUrl, longUrl)
  return shortUrl
}

function getUrl(shortUrl) {
  return linearProbing.search(shortUrl)
}

document.getElementById('shorten-btn').addEventListener('click', () => {
  const longUrl = document.getElementById('long-url').value
  const shortUrl = addUrl(longUrl)
  document.getElementById('result').textContent = `Short URL: ${shortUrl}`
  document.getElementById('long-url').value = ''
})

document.getElementById('retrieve-btn').addEventListener('click', () => {
  const shortUrl = document.getElementById('short-url').value
  const originalUrl = getUrl(shortUrl)
  document.getElementById('result').textContent = originalUrl
    ? `Original URL: ${originalUrl}`
    : 'URL not found'
  document.getElementById('short-url').value = ''
})
