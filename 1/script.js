console.log("Javascript is loaded");

// let h1Dom = document.querySelector("h1");
// console.log(h1Dom);

// alert("Hello world");

let firstName = prompt("What is your first name?");
let LastName = prompt("What is your last name?");

//Operation
let fullName = firstName + " " + LastName;
// let greetings = "Hello, my name is " + fullName;
let birthYear = prompt("What is your birth year");

// let age = 2023 - birthYear;

// reassigning
// let yearWord = 'year';
// yearWord = 'years';
// < > === !==

// let yearWord;
// if (age > 1) {
//   yearWord = "years";
// } else {
//   yearWord = "year";
// }

// console.log(fullName);
// console.log(firstName, LastName);
// console.log(typeof firstName);
// console.log(greetings);

// template literal

// function declaration

function calcAge() {
  let age = 2023 - birthYear;
  let yearWord;
  let gender = "male";
  if (age > 1) {
    yearWord = "years";
  } else {
    yearWord = "year";
  }
  return `${age} ${yearWord}`;
}

let calculatedAgeWithString = calcAge();
// console.log(gender);

let newGreetings = `Hello my friends, nice to meet you. My name is ${fullName} and I am ${age} ${yearWord} old`;

// console.log(newGreetings);
alert(newGreetings);
