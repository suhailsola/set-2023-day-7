console.log("javascript is loaded");

let fullName = prompt("What is your fullname?");
let birthYear = prompt("What is your birth year?");

function calcAge() {
  let age = 2023 - birthYear;
  let message;
  if (age < 16) {
    message = "You are still young to obtain a license";
  } else if (age >= 16 && age <= 18) {
    message = "You can get a motorcycle license";
  } else {
    message = "You can get a driver and motorcycle license";
  }
  return `${message}`;
}

let result = calcAge();
alert(calcAge());
