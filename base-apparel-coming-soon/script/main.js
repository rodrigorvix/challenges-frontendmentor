const buttonSubmit = document.querySelector(".section-button")
const form = document.querySelector('.section-content-form')

buttonSubmit.addEventListener("click", submitForm)


function validateEmail(email) {

  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

  return email.match(pattern)
}

function submitForm() {

  form.addEventListener("submit", (e) => {

    const inputEmail = document.getElementById("email")
    const message = document.querySelector('.input-message')
    const iconError = document.querySelector(".input-icon-error")

    inputEmail.focus()

    if (validateEmail(inputEmail.value)) {

      alert("Registered Email!")
      message.style.visibility = "hidden"
      iconError.style.visibility = "hidden"
      buttonSubmit.classList.remove("section-button-active")
      

    } else {
      message.innerHTML = "Please provide a valide e-mail"
      message.style.visibility = "visible"
      iconError.style.visibility = "visible"
      buttonSubmit.classList.add("section-button-active")
      e.preventDefault()
    }

    document.addEventListener("mousedown", (e) => {
      
      inputEmail.blur()
      message.style.visibility = "hidden"
      iconError.style.visibility = "hidden"
      buttonSubmit.classList.remove("section-button-active")
    })
  })

}


