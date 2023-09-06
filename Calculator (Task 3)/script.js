// Get the buttons and the display element
let buttons = document.querySelectorAll("button");
let display = document.querySelector("#display");
// Get the current value of the display
let value = "";
let evaluated = false;

// Initialize the operator count
let operatorCount = 0;

// Add an event listener to each button
Array.from(buttons).forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // Get the button text
    let btnText = e.target.innerText;

    // Clear the display if the user clicks the "C" button
    if (e.target.classList.contains("all-clear")) {
      clearScreenValue();
    }
    // Delete the last character in the display if the user clicks the "←" button
    else if (e.target.classList.contains("delete")) {
      removeLastChar();
    } else if (e.target.classList.contains("equal")) {
      evalResult();
    } else if (e.target.classList.contains("operator")) {
      handleOperatorClick(btnText);
    } else {
      updateScreenValue(btnText);
    }
    // Only update the display if the button pressed is not "=", "C", or "←"
    if (btnText !== "=" && btnText !== "C" && btnText !== "←") {
      display.value += btnText;
    }
  });
});

function handleOperatorClick(btnText) {
  if (btnText === "x") {
    updateScreenValue("*");
  } else if (btnText === "÷") {
    updateScreenValue("/");
  } else if (btnText === "%") {
    updateScreenValue("/100");
  } else if (btnText === "^") {
    updateScreenValue("**");
  } else {
    updateScreenValue(btnText);
  }
}

function updateScreenValue(btnText) {
  value += btnText;
}

function removeLastChar() {
  display.value = display.value.slice(0, -1);
  value = display.value;
}

function clearScreenValue() {
  display.value = "";
  value = display.value;
}

function evalResult() {
  try {
    display.value = eval(value);
    value = "";
    value = display.value;
    console.log(value);
    evaluated = true;
  } catch {
    display.value = "Error: Enter a valid expression";
  }
}
