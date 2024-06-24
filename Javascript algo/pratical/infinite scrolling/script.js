const BASE_URL = 'https://www.algoexpert.io/api/testimonials'
let canFetch = true
let afterId = null

function createUrl(PAGE_SIZE = 10) {
  const url = new URL(BASE_URL)
  url.searchParams.set('limit', PAGE_SIZE)

  if (afterId !== null) {
    url.searchParams.set('after', afterId) // Corrected syntax for setting query param
  }

  return url
}

function handleScroll() {
  if (!canFetch) {
    return
  }

  const bottomSpaceLeftScroll =
    this.scrollHeight - this.scrollTop - this.clientHeight

  if (bottomSpaceLeftScroll > 0) {
    return // If there's space left, return without fetching
  }

  fetchAndAppendTest() // Fetch more content if scrolled to the bottom
}

async function fetchAndAppendTest() {
  canFetch = false

  const url = createUrl() // Get the URL with appropriate parameters
  try {
    const res = await fetch(url)
    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`)
    }

    const { testimonials, hasNext } = await res.json()
    console.log(testimonials)

    // Append testimonials to the fragment and then to the container
    testimonials.forEach(({ message }) => {
      fragment.appendChild(createTestimonialEl(message))
    })

    testimonialsContainer.appendChild(fragment)

    if (hasNext) {
      afterId = testimonials[testimonials.length - 1].id
    } else {
      // Remove the scroll event listener if there's no more data
      testimonialsContainer.removeEventListener('scroll', handleScroll)
    }

    canFetch = true // Allow fetching again
  } catch (error) {
    console.error('Error fetching testimonials:', error)
    canFetch = true // Reset fetch flag in case of error
  }
}

function createTestimonialEl(message) {
  const p = document.createElement('p')
  p.classList.add('testimonial')
  p.textContent = message
  return p
}

// Fetch the initial data
fetchAndAppendTest()

// Set up scroll handler for infinite scroll
const testimonialsContainer = document.querySelector('#testimonial-container')
const fragment = document.createDocumentFragment()
testimonialsContainer.addEventListener('scroll', handleScroll)
 