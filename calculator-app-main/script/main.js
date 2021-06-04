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

themeSelect()