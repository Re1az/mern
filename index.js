//Introducing javascript

//  variables
var a = 10;
var b = 20;
//reasigning var value
b = 30;
//int can be changed into string
a = "Ram";
var result = a + b;
console.log(result);

//constant
const firstName = "Ram";
const nme = "Ram";
const type = " is a Good Boy";

console.log(nme.concat(type));

const perName = "Ram";
const behave = "Good Boy";

console.log(perName.concat(" is a ", behave));

const lastName = "Yadav";
let pname = "hari";

console.log(pname.slice(2, 4));
console.log(firstName + " " + lastName);

const name = "Asha";
const agee = 27;
let res = `${name} is ${agee} years old.`;
console.log(res);

const x = 5,
  y = 3;
console.log(`${x} + ${y} = ${x + y}`);

const temperature = 20;
const value = 2;
const pizza = "pizza";
const pasta = "pasta";

console.log(`The temperature is ${temperature}C`);
console.log(`${value} plus ${value} makes ${value + value}`);
console.log(`I like ${pizza} and ${pasta}`);

//object and function in object
const person = {
  pname: "Ram",
  age: 22,
  greet: function () {
    console.log(`Hello ${this.pname} your age is ${this.age}`);
  },
};
//call object
person.greet();

const rand = Math.floor(Math.random() * 40);
console.log(rand);

const num1 = 20;
const num2 = 50;

const add = num1 + num2;
console.log(`The addition is ${add}`);

// console.log(age < 20 ? "junior" : age > 20 ? "senior" : "regular");
// const age = 80;
// if (age < 20) {
//   console.log("junior");
// } else if (age > 50) {
//   console.log("senior");
// } else {
//   console.log("regular");
// }

// Define two integer variables called netSalary and .
const netSalary = 1000;
const expenses = 100;

if (netSalary > expenses) {
  console.log(`You have saved ${netSalary - expenses} this month`);
} else if (expenses > netSalary) {
  console.log(`You have lost ${expenses - netSalary} this month `);
} else {
  console.log(` Your balance hasn't changed`);
}

const number1 = 100;
const number2 = 100;
const calc = "add";

switch (calc) {
  case "add":
    console.log(`${number1}+${number2}=${number1 + number2}`);
    break;
  case "sub":
    console.log(`${number1}-${number2}=${number1 - number2}`);
    break;
  case "mul":
    console.log(`${number1}*${number2}=${number1 * number2}`);
    break;
  default:
    console.log(`error occured!!!`);
}

// Then verify that the program works correctly for different values of netSalary and expenses.

//Data types

//primitive data type
/*
String
Number
Boolean
nullundefine
* /


//reference type
/*
Array
object
function

*/
