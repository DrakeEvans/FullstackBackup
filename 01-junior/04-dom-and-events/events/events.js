let app = document.querySelector('#app')
let button = document.querySelector('#clickMe')
let container = document.querySelector('#container')

app.addEventListener(
  "click",
  (evt) => {
    console.log("APP CLICK'D", evt)
  }
)

button.addEventListener(
  "click",
  (evt) => {
    console.log("BUTTON ACTIONS", evt)
    let newDiv = document.createElement('div')
    newDiv.classList.add('hot-dog')
    newDiv.innerText = `HOT DOGS @ (${evt.offsetX},${evt.offsetY})`
    container.appendChild(newDiv)
  }
)

container.addEventListener(
  "click", 
  function (evt) {
    evt.stopPropagation()

    console.log("CONTAINER ACTIONS", evt)
    console.log(this, evt.target)

    if (evt.target.classList.contains('hot-dog')) {
      let veganSausage = evt.target
      veganSausage.classList.toggle('hot-dog')
      veganSausage.classList.toggle('vegan-sausage')
      veganSausage.innerText = "VEGAN SAUSAGE MOFO"
    } else {
      console.log("WOMP WOMP")
    }
  }
)

let input = document.querySelector('#a')
let form = document.querySelector('#b')

input.addEventListener(
  'keypress',
  (evt) => {
    console.log(evt)
  }
)

form.addEventListener(
  'submit', 
  (evt) => {
    evt.preventDefault()
    input.value = "I DON'T LIKE YOU"
    console.log(evt)
  }
)