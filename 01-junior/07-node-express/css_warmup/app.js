let trigger = document.querySelector('#modal-trigger')
let modal = document.querySelector('#modal')
let scrim = document.querySelector('.scrim')
let content = document.querySelector('.content')
let burger = document.querySelector('.burger')
let aside = document.querySelector('aside')

burger.addEventListener('click', evt => {
  burger.classList.toggle('open')
  aside.classList.toggle('open')
})

trigger.addEventListener('click', evt => {
  scrim.classList.add('active')
  content.classList.add('blur')

  setTimeout(() => {
    modal.classList.add('active')
  }, 0)
})

scrim.addEventListener('click', function (evt) {
  if (evt.target === this) {
    modal.classList.remove('active')
    content.classList.remove('blur')
    scrim.classList.remove('active')
  }
})