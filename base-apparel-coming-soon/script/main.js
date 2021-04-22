const buttonSubmit = document.querySelector(".section-button")
     
    buttonSubmit.addEventListener("click", validateEmail)
    
    function validateEmail() {

      const email = document.getElementById("email").value
      const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
      const message = document.querySelector('.input-message')
      const iconError = document.querySelector(".input-icon-error")
      const inputEmail = document.getElementById("email")

      inputEmail.focus()

      if (email.match(pattern)) {

        alert("Registered Email!")
        message.style.visibility = "hidden"
        iconError.style.visibility = "hidden"
        buttonSubmit.classList.remove("section-button-active")

      } else {
        buttonSubmit.classList.add("section-button-active")
        message.innerHTML = "Please provide a valide e-mail"
        message.style.visibility = "visible"
        iconError.style.visibility = "visible"
        document.onload

      }

    }
