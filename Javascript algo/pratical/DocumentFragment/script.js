const container = document.getElementById('container')

const fragment = document.createDocumentFragment()

for (let i = 0; i < 20; i++) {
  const div = document.createElement('div')
  div.textContent = `Item${i}`
  fragment.appendChild(div)
}

container.appendChild(fragment)
