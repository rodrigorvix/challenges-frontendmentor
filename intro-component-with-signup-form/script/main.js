const form = document.querySelector(".main-form")
const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const email = document.getElementById("email")
const password = document.getElementById("password")
const button = document.querySelector(".main-button")
const inputs = document.querySelectorAll(".main-form-inputs")

form.addEventListener("submit", (e) => {

  button.classList.add("main-button-active")

  if (validateForm() === 0) {
    alert("Successful registration !")

  } else {
    e.preventDefault()
    resetSubmit()
  }
})

function validateForm() {

  let hashValidate = 0

  if (isEmpty(firstName)) {

    firstName.insertAdjacentHTML('afterend', '<span class="message-error">First Name cannot be empty</span>')
    firstName.classList.add("error")
    firstName.placeholder = ""
    inputs[0].classList.add("icon-error")
    hashValidate++
  }
  if (isEmpty(lastName)) {

    lastName.insertAdjacentHTML('afterend', '<span class="message-error">Last Name cannot be empty</span>')
    lastName.classList.add("error")
    lastName.placeholder = ""
    inputs[1].classList.add("icon-error")
    hashValidate++
  }
  if (!validateEmail(email)) {

    email.insertAdjacentHTML('afterend', '<span class="message-error">Looks like this is not an email</span>')
    email.classList.add("error")
    email.value = ""
    email.placeholder = "email@example.com"
    inputs[2].classList.add("icon-error")
    hashValidate++
  }
  if (isEmpty(password)) {

    password.insertAdjacentHTML('afterend', '<span class="message-error">Password cannot be empty</span>')
    password.classList.add("error")
    password.placeholder = ""
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

    button.classList.remove("main-button-active")
    firstName.classList.remove("error")
    lastName.classList.remove("error")
    email.classList.remove("error")
    password.classList.remove("error")

    firstName.placeholder = "First Name"
    lastName.placeholder = "Last Name"
    email.placeholder = "Email Address"

    password.placeholder = "Password"


    document.querySelectorAll(".message-error").forEach((e) => {
      e.parentNode.removeChild(e)
    })
    inputs.forEach((e) => {
      e.classList.remove("icon-error")
      e.blur()

    })
  })
}