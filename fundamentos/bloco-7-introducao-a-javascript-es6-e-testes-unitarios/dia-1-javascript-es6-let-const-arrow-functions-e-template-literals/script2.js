let button = document.getElementById('button')
let clickCounterHtml = document.getElementById('click-count')
let counter = 0

const incrementCount = () => {
  counter += 1
  clickCounterHtml.innerText = `Button Clicks: ${counter}`
}

button.addEventListener('click',incrementCount)

