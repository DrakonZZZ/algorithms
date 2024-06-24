document.addEventListener('DOMContentLoaded', () => {
  const consoleInput = document.getElementById('console-input')
  const consoleOutput = document.getElementById('console-output')

  consoleInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      const command = consoleInput.value
      if (command.trim()) {
        executeCommand(command)
        consoleInput.value = ''
      }
    }
  })

  function executeCommand(command) {
    const output = document.createElement('div')
    output.classList.add('console-command')
    output.innerHTML = `<span class="prompt">></span> ${command}`
    consoleOutput.appendChild(output)

    try {
      const result = eval(command)
      if (result !== undefined) {
        const resultElement = document.createElement('div')
        resultElement.classList.add('console-result')
        resultElement.textContent = result
        consoleOutput.appendChild(resultElement)
      }
    } catch (error) {
      const errorElement = document.createElement('div')
      errorElement.classList.add('console-error')
      errorElement.textContent = error
      consoleOutput.appendChild(errorElement)
    }

    consoleOutput.scrollTop = consoleOutput.scrollHeight
  }
})
