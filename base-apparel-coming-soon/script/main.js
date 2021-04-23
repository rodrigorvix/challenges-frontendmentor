const form = document.querySelector('.section-content-form')
const inputEmail = document.getElementById("email")
const message = document.querySelector('.input-message')
const iconError = document.querySelector(".input-icon-error")
const buttonSubmit = document.querySelector(".section-button")



form.addEventListener("submit", (event) => {
  inputEmail.focus()

  if (validateEmail(inputEmail.value)) {
    alert("E-mail successfully registered !")
   

  } else {
    event.preventDefault()
    message.innerHTML = "Please provide a valide e-mail"
    message.style.visibility = "visible"
    iconError.style.visibility = "visible"
    buttonSubmit.classList.add("section-button-active")

    resetSubmit()
  }
})


function validateEmail(email) {

  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

  return email.match(pattern)
}

function resetSubmit() {
  document.addEventListener("mousedown", (e) => {

    inputEmail.blur()
    message.style.visibility = "hidden"
    iconError.style.visibility = "hidden"
    buttonSubmit.classList.remove("section-button-active")

  })
}







