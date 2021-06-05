initCalculator();
themeSelect();

function initCalculator() {
  const buttons = document.querySelectorAll(".buttons-calc button");
  const display = document.querySelector(".display-calc");

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      if (e.target.innerText === "DEL") {
        display.innerHTML = deleteScreen(display.innerHTML);
      } else if (e.target.innerText === "RESET") {
        display.innerHTML = resetScreen(display.innerHTML);
      } else if (e.target.innerText === "=") {
        const result = calculator(display.innerHTML);
        display.innerHTML =
          result === "invalid expression" ? result : formatNumber(result);
      } else if (display.innerHTML === "0" && display.innerHTML.length === 1) {
        display.innerHTML = button.innerText;
      } else {
        display.innerHTML += button.innerText;
      }
    });
  });
}

function deleteScreen(displayCurrent) {
  if (displayCurrent.length === 1) {
    displayCurrent = "0";
  } else {
    displayCurrent = displayCurrent.slice(0, -1);
  }
  return displayCurrent;
}

function resetScreen(displayCurrent) {
  return "0";
}

function calculator(displayCurrent) {
  displayCurrent = displayCurrent.replace(/[x]+/g, "*");
  try {
    return eval(displayCurrent);
  } catch (error) {
    return "invalid expression";
  }
}
function formatNumber(number) {
  if (!Number.isInteger(number)) {
    number = number.toFixed(3);
    number = number.toString().replace(/(^0+(?=\d))|(,?0+$)/g, "");
  }
  return number;
}

function themeSelect() {
  const selectOne = document.querySelector("#theme-one");
  const selectTwo = document.querySelector("#theme-two");
  const selectThree = document.querySelector("#theme-three");
  const html = document.querySelector("html");

  selectOne.addEventListener("click", () => {
    html.dataset.theme = "one";
  });
  selectTwo.addEventListener("click", () => {
    html.dataset.theme = "two";
  });
  selectThree.addEventListener("click", () => {
    html.dataset.theme = "three";
  });
}
