// //Introducing javascript

// //  variables
// // var a = 10;
// var b = 20;
// //reasigning var value
// b = 30;
// //int can be changed into string
// a = "Ram";
// var result = a + b;
// console.log(result);

// //constant
// const firstName = "Ram";
// const nme = "Ram";
// const type = " is a Good Boy";

// console.log(nme.concat(type));

// const perName = "Ram";
// const behave = "Good Boy";

// console.log(perName.concat(" is a ", behave));

// const lastName = "Yadav";
// let pname = "hari";

// console.log(pname.slice(2, 4));
// console.log(firstName + " " + lastName);

// const name = "Asha";
// const agee = 27;
// let res = `${name} is ${agee} years old.`;
// console.log(res);

// const x = 5,
//   y = 3;
// console.log(`${x} + ${y} = ${x + y}`);

// const temperature = 20;
// const value = 2;
// const pizza = "pizza";
// const pasta = "pasta";

// console.log(`The temperature is ${temperature}C`);
// console.log(`${value} plus ${value} makes ${value + value}`);
// console.log(`I like ${pizza} and ${pasta}`);

// //object and function in object
// const person = {
//   pname: "Ram",
//   age: 22,
//   greet: function () {
//     console.log(`Hello ${this.pname} your age is ${this.age}`);
//   },
// };
// //call object
// person.greet();

// const rand = Math.floor(Math.random() * 40);
// console.log(rand);

// const num1 = 20;
// const num2 = 50;

// const add = num1 + num2;
// console.log(`The addition is ${add}`);

// // console.log(age < 20 ? "junior" : age > 20 ? "senior" : "regular");
// // const age = 80;
// // if (age < 20) {
// //   console.log("junior");
// // } else if (age > 50) {
// //   console.log("senior");
// // } else {
// //   console.log("regular");
// // }

// // Define two integer variables called netSalary and .
// const netSalary = 1000;
// const expenses = 100;

// if (netSalary > expenses) {
//   console.log(`You have saved ${netSalary - expenses} this month`);
// } else if (expenses > netSalary) {
//   console.log(`You have lost ${expenses - netSalary} this month `);
// } else {
//   console.log(` Your balance hasn't changed`);
// }

// const number1 = 100;
// const number2 = 100;
// const calc = "add";

// switch (calc) {
//   case "add":
//     console.log(`${number1}+${number2}=${number1 + number2}`);
//     break;
//   case "sub":
//     console.log(`${number1}-${number2}=${number1 - number2}`);
//     break;
//   case "mul":
//     console.log(`${number1}*${number2}=${number1 * number2}`);
//     break;
//   default:
//     console.log(`error occured!!!`);
// }

// Then verify that the program works correctly for different values of netSalary and expenses.

//even odd

// let i = 0;
// while (i <= 10) {
//   if (i % 2 == 0) {
//     console.log(`The number ${i} is even`);
//   }
//   // else {
//   //   //   console.log(`The number ${i} is odd`);
//   // }

//   i++;
// }

//do while

// do {
//   i++;
//   console.log("hello" + " " + i);
// } while (i < 10);

//for loop
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 == 0) {
//     console.log(`The number ${i} is even`);
//   } else {
//     console.log(`The number ${i} is odd`);
//   }
// }
// for (let i = 1; i <= 20; i++) {
//   console.log(`The number ${i} is even`);
//   if (i === 5) {
//     break;
//   }
// }

// for i from 1 to 15
//     if i is divisible by 3 and 5
//         print "fizz buzz"
//     otherwise if i is divisible by 3
//         print "fizz"
//     otherwise if i is divisible by 5
//         print "buzz"
//     otherwise
//         print i

// for (i = 1; i <= 15; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("fizz buzz");
//   } else if (i % 3 === 0) {
//     console.log("fizz");
//   } else if (i % 5 === 0) {
//     console.log("buzz");
//   } else {
//     console.log(`${i}`);
//   }
// }

// in and of
// const names = ["ram", "hari"];

// for (let n in names) {
//   console.log(n);
// }

// for (let n of names) {
//   console.log(n);
// }

//function

// function namaste() {
//   console.log("Namaste welcome!!");
// }
// namaste();

// const greets = () => {
//   console.log("Namaste welcome again!!");
// };
// greets();

// const add = (num1, num2) => {
//   console.log(`The addition of ${num1} and ${num2} is ${num1 + num2}`);
// };
// add(10, 20);

// const arrnum = (numbers) => {
//   for (let n of numbers) {
//     let total = n + n;
//   }
//   return total;
// };
// console.log(total);
// arrnum([1, 2, 3, 4, 5]);

//array
//foreach map find filter reduce

//foreach
// const animals = ["dog", "cat", "cow"];

// animals.forEach((type, i) => {
//   console.log("hello world");
// });

// const number = [11, 22, 33, 44, 55, 66, 77];
// let total = 0;
// number.forEach((n, i) => {
//   total = n + n;
// });
// console.log(total);

//map
// const mp = number.map((num, i) => {
//   if (num === 77) {
//     return 100;
//   } else {
//     return num;
//   }
// });
// console.log(mp);

//find
// const fnd = number.find((num, i) => {
//   return num === 44;
// });
// console.log(fnd);

//filter
// const fltr = number.filter((num, i) => {
//   return num > 44;
// });
// console.log(fltr);

//reduce
// const numbe = [11, 22, 55, 33];
// let max;
// const red = numbe.reduce((a, b) => {
//   return a > b ? a : b;
// });
// console.log(red);

//object
// const person = {
//   name: "John",
//   age: 90,
//   habits: ["eat", "sleep", "code"],
//   address: {
//     city: "New York",
//     street: "Main Street",
//     number: 123,
//   },
//   sleep: () => {
//     console.log("person is sleeping");
//   },
// };

// person.job = "Dev";
// console.log(person);

/*
primitive types
string
number
boolean
null
undefined
----------------------------
reference types
array
object
function
*/

// spread, destructing

// const fields = ["page", "search", "sort"];

// const obj = {
//   page: 1,
//   search: "hello",
//   sort: "ascending",
//   rating: 5,
//   title: "great",
// };
// fields.forEach((f) => {
//   delete obj[f];
// });
// console.log(obj);

// function car(name, color) {
//   (this.name = name), (this.color = color);
// }
// const car1 = new car("Honda", "black");
// const car2 = new car("Huyandai", "white");

// console.log(car1, car2);

const persons = [
  {
    id: 1,
    name: "John",
    gender: "male",
    age: 30,
  },
  {
    id: 2,
    name: "Jane",
    gender: "female",
    age: 25,
  },
  {
    id: 3,
    name: "Bob",
    gender: "male",
    age: 35,
  },
  {
    id: 4,
    name: "Alice",
    gender: "female",
    age: 28,
  },
];
const gend = persons.filter((per) => {
  return per.gender === "female";
});
console.log(gend);

// let total = 0;
// persons.forEach((per) => {
//   let total = per.age + per.age;
//   console.log(total);
// });

persons.forEach((per) => {});

const addNames = persons.map((per) => {
  let names = per.name;
  return names;
});
console.log(addNames);

const { id, name, age } = persons;
console.log(id);

const somes = persons.map(({ age, gender }) => {
  return gender, age;
});
console.log(somes);

let str;
console.log(`${str} ?? The name is `);

class car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
}
const car1 = new car("Toyota", 2019);
console.log(car1);

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
