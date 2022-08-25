// Variables

const content = document.querySelector("#content");
const numbers = document.querySelectorAll(".num");
const equalsBtn = document.getElementById("equals");
const clearBtn = document.getElementById("ac");
const changeSign = document.getElementById("plus-minus");
const operators = document.querySelectorAll(".operator");
const acReset = document.querySelector(".ac");
// Events

acReset.addEventListener("click", () => {
  location.reload();
});

// Functions
function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  if (b === 0) {
    alert("Cannot divide by 0!");
    clear();
    current.innerText = "0";
    return;
  }
  return b / y;
}

function percent(a, b) {
  return a * (b / 100);
}

function operate(a, b, c) {
  let output = 0;

  try {
    switch (c) {
      case "+":
        output = a + b;
        break;

      case "*":
        output = a * b;
        break;

      case "-":
        output = a - b;
        break;

      case "/":
        if (b === 0) {
          throw "Cant divide with 0!";
        } else {
          output = a / b;
        }
        break;
    }
  } catch (e) {
    console.log("There's an error"), e;
  }

  return output;
}
console.log(operate(25, 4, "+"));

const digits = document.getElementsByClassName("digit");
for (let i = 0; i < digits.length; i++) {
  digits[i].addEventListener("click", function (e) {
    content.textContent =
      parseInt(content.textContent) * 10 + parseInt(e.currentTarget.value);
  });
}
