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
const age = 27;
let res = `${name} is ${age} years old.`;
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
