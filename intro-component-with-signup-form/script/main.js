const form = document.querySelector(".main-form")


form.addEventListener("submit", (e) => {

  const firstName = document.getElementById("firstName")
  const LastName = document.getElementById("LastName")
  const email = document.getElementById("email")
  const password = document.getElementById("password")


  if (validateForm(firstName, LastName, email, password) === 0) {
    alert("Formulário enviado")

  } else {
    e.preventDefault()
    resetSubmit()
  }
})

function validateForm(firstName, LastName, email, password) {

  let hashValidate = 0

  if (isEmpty(firstName)) {
    firstName.focus()
    firstName.style.background = "blue"
    hashValidate++
  }
  if (isEmpty(LastName)) {
    LastName.focus()
    LastName.style.background = "blue"
    hashValidate++
  }
  if (!validateEmail(email.value)) {
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

  return email.match(pattern)
}

function resetSubmit() {
  document.addEventListener("mousedown", (e) => {

    firstName.blur()
    LastName.blur()
    email.blur()
    password.blur()

    firstName.style.background = "white"
    LastName.style.background = "white"
    email.style.background = "white"
    password.style.background = "white"


  })
}