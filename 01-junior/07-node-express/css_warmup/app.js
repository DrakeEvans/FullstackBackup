let trigger = document.querySelector('#modal-trigger')
let modal = document.querySelector('#modal')

trigger.addEventListener('click', (evt) => {
  modal.classList.toggle('active')
})