themeSelect()
insertDisplay()
deleteScreen()
resentScreen()
calculator()


function insertDisplay() {
  const buttons = document.querySelectorAll(".buttons-calc button")
  const display = document.querySelector(".display-calc")
  

  buttons.forEach(button => {
    button.addEventListener("click", (e) => {
     
      if(display.innerHTML.length === 1 && display.innerHTML === "0"){
        display.innerHTML = " "
      }
     
      if (e.target.innerText !== "DEL" && e.target.innerText !== "RESET" && e.target.innerText !== "=") {
        display.innerHTML += button.innerText
      }
    })
  })
}
function deleteScreen() {
  const delelteButton = document.querySelector('.buttons-calc .del')
  const display = document.querySelector(".display-calc")
  
  delelteButton.addEventListener("click",() => {
    if(display.innerHTML.length < 1){
      display.innerHTML = "0"
    }
    display.innerHTML = display.innerHTML.slice(0,-1)
  })
 
}
function resentScreen () {
  const resetButton = document.querySelector('.buttons-calc .reset')
  const display = document.querySelector(".display-calc")
  
  resetButton.addEventListener("click",() => {
    display.innerHTML = "0"
  })
}
function calculator () {
  const display = document.querySelector(".display-calc")
  const equalButton = document.querySelector('.buttons-calc .equal')

  equalButton.addEventListener("click",() => {
    display.innerHTML = display.innerHTML.replace(/[x]+/g, "*")
    display.innerHTML = eval(display.innerHTML)
  })


}
function themeSelect() {
  const selectOne = document.querySelector('#theme-one')
  const selectTwo = document.querySelector('#theme-two')
  const selectThree = document.querySelector('#theme-three')
  const html = document.querySelector('html')

  selectOne.addEventListener("click",() => {
    html.dataset.theme = "one"
  })
  selectTwo.addEventListener("click",() => {
    html.dataset.theme = "two"
  })
  selectThree.addEventListener("click",() => {
    html.dataset.theme = "three"
  })
}

