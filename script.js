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

document.getElementById('logo-item').addEventListener('click', (e) => {
  document.getElementById('logo-item').classList.add('rotated')
  setTimeout(() =>  document.getElementById('logo-item').classList.remove('rotated'), 500)
})