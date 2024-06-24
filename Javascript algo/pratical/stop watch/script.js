const startBtn = document.getElementById('start-btn')
const stopBtn = document.getElementById('stop-btn')
const resetBtn = document.getElementById('reset-btn')
const timer = document.getElementById('timer')

// Only add relevant event listeners to each button
startBtn.addEventListener('click', startTimer)
stopBtn.addEventListener('click', stopTimer)
resetBtn.addEventListener('click', resetTimer)

// Variables to control the timer
let timerId
let elapsedTime = 0 // Track total elapsed time
let startTime

function startTimer() {
  startBtn.disabled = true
  stopBtn.disabled = false
  resetBtn.disabled = false

  // Initialize start time, accounting for previously elapsed time
  startTime = performance.now() - elapsedTime

  // Start updating the timer
  timerId = requestAnimationFrame(updateTimer)
}

function stopTimer() {
  startBtn.disabled = false
  stopBtn.disabled = true
  resetBtn.disabled = false

  // Stop the timer updates
  cancelAnimationFrame(timerId)
}

function resetTimer() {
  resetBtn.disabled = true
  startBtn.disabled = false // Re-enable start after reset
  stopBtn.disabled = true

  // Reset the timer display and elapsed time
  timer.textContent = '00:00:00'
  elapsedTime = 0
  cancelAnimationFrame(timerId)
}

function updateTimer() {
  elapsedTime = performance.now() - startTime // Calculate the total elapsed time

  const secondsElapsed = elapsedTime / 1000
  const minutesElapsed = secondsElapsed / 60

  // Corrected formatting
  const millisText = formatNumber(Math.floor(elapsedTime % 1000), 3)
  const secondsText = formatNumber(Math.floor(secondsElapsed % 60), 2)
  const minutesText = formatNumber(Math.floor(minutesElapsed), 2)

  timer.textContent = `${minutesText}:${secondsText}:${millisText}` // Correct order

  // Continue updating the timer
  timerId = requestAnimationFrame(updateTimer)
}

// Format a number with padding for consistent output
function formatNumber(number, length) {
  let stringNumber = String(number)
  return stringNumber.padStart(length, '0')
}
