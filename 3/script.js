// console.log(addition(20,20));

// // function declaration
// // hoisiting
// // function addition(x, y) {
// //   let result = x + y;
// //   return result;
// // }

// // function expression
// // arrow function
// const addition = (x, y) => {
//   let result = x + y;
//   return result;
// };
// console.log(addition(10, 10));

let firstNameDom = document.querySelector("#firstName");

let lastNameDom = document.querySelector("#lastName");
let birthYearDom = document.querySelector("#birthYear");
let greetingsDom = document.querySelector("#greetings");

function processData() {
  let firstNameValue = firstNameDom.value;
  let lastNameValue = lastNameDom.value;
  let birthYearValue = birthYearDom.value;
  let age = 2023 - birthYearValue;
  let greetings = `Hello ${firstNameValue} ${lastNameValue}. You are ${age} years old`;
  greetingsDom.innerText = greetings;
}

