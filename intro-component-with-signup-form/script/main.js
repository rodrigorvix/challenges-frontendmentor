const form = document.querySelector(".main-form")
const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const email = document.getElementById("email")
const password = document.getElementById("password")
const button = document.querySelector(".main-button")
const inputs = document.querySelectorAll(".main-form-inputs")

form.addEventListener("submit", (e) => {

  button.classList.add("main-button-active")

  if (validateForm(firstName, lastName, email, password) === 0) {
    alert("Successful registration !")

  } else {
    e.preventDefault()
    resetSubmit()
  }
})

function messageError (input) {
  const message = document.createElement('span')
  message.classList.add("message-icon")
}

function validateForm(firstName, lastName, email, password) {

  let hashValidate = 0

  if (isEmpty(firstName)) {
    firstName.focus()
    inputs[0].classList.add("icon-error")
    messageError.textContent = "testando de novo"
    inputs[0].appendChild(messageError)
    hashValidate++
  }
  if (isEmpty(lastName)) {
    lastName.focus()
    messageError.textContent = "testando de novo lastname"
    inputs[1].appendChild(messageError)
   inputs[1].classList.add("icon-error")
    hashValidate++
  }
  if (!validateEmail(email)) {
    email.focus()
    email.style.background = "blue"
   inputs[2].classList.add("icon-error")
    hashValidate++
  }
  if (isEmpty(password)) {
    password.focus()
    password.style.background = "blue"
   inputs[3].classList.add("icon-error")
    hashValidate++
  }
  return hashValidate

}

function isEmpty(field) {
  return field.value === ""
}

function validateEmail(email) {

  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

  return email.value.match(pattern)
}

function resetSubmit() {
  document.addEventListener("mousedown", (e) => {

    firstName.blur()
    lastName.blur()
    email.blur()
    password.blur()

    firstName.style.background = "white"
    lastName.style.background = "white"
    email.style.background = "white"
    password.style.background = "white"
    button.classList.remove("main-button-active")



  })
}