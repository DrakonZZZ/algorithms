const time = document.getElementById('time')
const clock = document.getElementById('clock')

// Update the time every second
function updateTime() {
  time.innerText = `Time: ${new Date().toLocaleTimeString()}`
}

// Move the clock to a random position and change its color every 3 seconds
function updateClockPositionAndColor() {
  const { x, y } = generatePosition(clock)
  const color = generateColor()
  clock.style.left = `${x}px`
  clock.style.top = `${y}px`
  clock.style.position = 'absolute' // Ensure the position is absolute
  clock.style.color = color
}

function generatePosition(element) {
  const x = Math.floor(
    Math.random() * (window.innerWidth - element.offsetWidth)
  )
  const y = Math.floor(
    Math.random() * (window.innerHeight - element.offsetHeight)
  )
  return { x, y }
}

function generateColor() {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  return `rgb(${r}, ${g}, ${b})`
}

// Initial time update
updateTime()

// Set intervals
setInterval(updateTime, 1000) // Update time every second
setInterval(updateClockPositionAndColor, 3000)
