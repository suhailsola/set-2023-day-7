console.log("javascript loaded");

let display = document.querySelector("#display");

let currNumber;
// console.dir(display.textContent);

let sum;

function add0() {
  display.innerText += 0;
}
function add1() {
  display.innerText += 1;
}
function add2() {
  display.innerText += 2;
}
function add3() {
  display.innerText += 3;
}
function add4() {
  display.innerText += 4;
}
function add5() {
  display.innerText += 5;
}
function add6() {
  display.innerText += 6;
}
function add7() {
  display.innerText += 7;
}
function add8() {
  display.innerText += 8;
}
function add9() {
  display.innerText += 9;
}

function addDot() {
  display.innerText += ".";
}

//operators
function addPlus() {
  display.innerText += "+";
}

function addMinus() {
  display.innerText += "-";
}
function addMultiply() {
  display.innerText += "*";
}

function addDivide() {
  display.innerText += "/";
}

// clear

function deleteBtn() {
  //   console.log(display.textContent.slice(0, -1));
  currNumber = display.textContent.slice(0, -1);
  display.innerText = currNumber;
}

function clearDisplay() {
  console.log(display.textContent);
  display.innerText = "";
}

function equal() {
  try {
    sum = eval(display.textContent);
    display.innerText = sum;
  } catch (err) {
    display.innerText = "Syntax error";
  }
}


// eval(string)
