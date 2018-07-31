let trigger = document.querySelector('#modal-trigger')
let modal = document.querySelector('#modal')
let scrim = document.querySelector('.scrim')
let main = document.querySelector('main')

trigger.addEventListener('click', (evt) => {
  scrim.classList.add('active')
  main.classList.add('blur')

  setTimeout(() => {
    modal.classList.add('active')
  }, 30)
})

scrim.addEventListener('click', function (evt) {
  if (evt.target === this) {
    modal.classList.remove('active')
    setTimeout(() => {
      main.classList.remove('blur')
      scrim.classList.remove('active')
    }, 400)
  }
})