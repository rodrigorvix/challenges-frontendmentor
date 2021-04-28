const form = document.querySelector(".main-form")
const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const email = document.getElementById("email")
const password = document.getElementById("password")
const button = document.querySelector(".main-button")


form.addEventListener("submit", (e) => {

  button.classList.add("main-button-active")

  if (validateForm(firstName, lastName, email, password) === 0) {
    alert("Successful registration !")

  } else {
    e.preventDefault()
    resetSubmit()
  }
})

function validateForm(firstName, lastName, email, password) {

  let hashValidate = 0

  if (isEmpty(firstName)) {
    firstName.focus()
    firstName.style.background = "blue"
    hashValidate++
  }
  if (isEmpty(lastName)) {
    lastName.focus()
    lastName.style.background = "blue"
    hashValidate++
  }
  if (!validateEmail(email)) {
    email.focus()
    email.style.background = "blue"
    hashValidate++
  }
  if (isEmpty(password)) {
    password.focus()
    password.style.background = "blue"
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