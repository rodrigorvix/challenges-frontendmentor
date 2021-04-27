const form = document.querySelector(".main-form")


form.addEventListener ("submit", (e) => {
    debugger
    const firstName = document.getElementById("firstName")
    const LastName = document.getElementById("LastName")
    const email = document.getElementById("email")
    const password = document.getElementById("password")
    const inputs = document.querySelectorAll(".main-form input")
    let invalid = false

  inputs.forEach(element => {
    if(isEmpty(element)) {
        element.focus()
        element.textContent = "Digite alguma coisa"
        invalid = true
    }
  })

  if(invalid) {
      e.preventDefault()
  } else {
      alert("formulario enviado")
  }
    
})


function isEmpty (field) {
   return field.value === ""
}

function validateEmail(email) {

    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
  
    return email.match(pattern)
  }
  
  function resetSubmit() {
    document.addEventListener("mousedown", (e) => {
  
      inputEmail.blur()
      message.style.visibility = "hidden"
     
    })
  }