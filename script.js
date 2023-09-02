const hamburguerButton = document.getElementById('hamburguer-button')
const menu = document.getElementById('menu')
hamburguerButton.addEventListener('click', (e) => {
  menu.classList.toggle('open')
})

menu.addEventListener('click', (e) => {
  menu.classList.toggle('open')
})