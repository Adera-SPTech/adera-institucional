const hamburguerButton = document.getElementById('hamburguer-button')
const blurDiv = document.getElementById('blur-div')
const menu = document.getElementById('menu')
hamburguerButton.addEventListener('click', (e) => {
  menu.classList.toggle('open')
  blurDiv.classList.toggle('shown')
})

blurDiv.addEventListener('click', (e) => {
  menu.classList.toggle('open')
  blurDiv.classList.toggle('shown')
})