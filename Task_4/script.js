// Here are **practice tasks only** (❌ no answers, ❌ no objects), focused on **arrays and primitive values**:

//arrays
const number = [1, 2, 3, 4, 5, 6, 7];
const negNumber = [-11, -2, -3, 4, 5, 6, 7];
const largerNumbers = [100, 200, 300, 50, 20, 40, 10];

const string = ["Helloo", "World", "How", "Are", "You ?"];

// ## 🔁 `forEach()` Tasks

// 1. Print each number multiplied by 2.

const multiplication = number.forEach((num, i) => {
  console.log(`${num} * 2 = ${num * 2}`);
});

// 2. Print only the odd numbers from an array.
const oddNumber = number.forEach((num, i) => {
  if (num % 2 !== 0) {
    console.log(`The odd number are ${num}`);
  }
});
// 3. Count how many elements are greater than 50 using `forEach`.

let count = 0;
const greater = largerNumbers.forEach((num, i) => {
  if (num > 50) {
    count++;
  }
});
console.log(`The elements that are greater than 50 is ${count}`);
// 4. Print the index and value of each element.
const index = number.forEach((num, i) => {
  console.log(`The index of ${num} is ${i}`);
});
// 5. Calculate the sum of all numbers using `forEach`.
let sum = 0;
const addition = number.forEach((num, i) => {
  sum += num;
});
console.log(`The sum of all number in array is ${sum}`);

// ---

// ## 🗺️ `map()` Tasks

// 1. Create a new array where each number is squared.
const square = number.map((num) => {
  return Math.pow(num, 2);
});
console.log(square);
// 2. Convert all strings to uppercase.

const upper = string.map((str, i) => {
  return str.toUpperCase();
});
console.log(upper);
// 3. Add 10 to each number in the array.
const addNumber = number.map((num, i) => {
  return num + 10;
});
console.log(addNumber);
// 4. Convert an array of numbers to strings.
const convert = number.map((num) => {
  return num.toString();
});
console.log(convert);
// 5. Replace each number with `"even"` or `"odd"`.
const replace = number.map((num) => {
  return num % 2 === 0 ? "even" : "odd";
});
console.log(replace);

// ---

// ## 🔍 `find()` Tasks

// 1. Find the first number greater than 100.
const great = largerNumbers.find((num) => {
  let res = num > 100;
  return res;
});
console.log(great);
// 2. Find the first even number.
const firstEven = number.find((num) => {
  return num % 2 === 0;
});
console.log(firstEven);
// 3. Find the first negative number.
const negative = negNumber.find((num) => {
  return num < 0;
});
console.log(negative ?? "cant find negative number");
// 4. Find the first string longer than 5 characters.
const longer = string.find((str) => {
  let long = str.length > 5;
  return long;
});
console.log(longer ?? "cant find");
// 5. Find the first number divisible by 7.
const divisible = number.find((num) => {
  return num % 7 == 0;
});
console.log(divisible);

// ---

// ## 🧹 `filter()` Tasks

// 1. Get all even numbers.
const allEven = number.filter((num) => {
  return num % 2 === 0;
});
console.log(allEven);
// 2. Get all numbers greater than 50.
const allgreater = largerNumbers.filter((num) => {
  return num > 50;
});
console.log(allgreater);
// 3. Get all negative numbers.
const nega = negNumber.filter((num) => {
  return num < 0;
});
console.log(nega);
// 4. Get all strings with length more than 4.
const length = string.filter((str) => {
  return str.length > 4;
});
console.log(length);
// 5. Get all numbers divisible by 3.
const divi = largerNumbers.filter((num) => {
  return num % 3 === 0;
});
console.log(divi);

// ---

// ## 🧮 `reduce()` Tasks

// 1. Find the sum of all numbers.
const summation = number.reduce((a, b) => {
  return a + b;
});
console.log(summation);
// 2. Find the product of all numbers.
const product = number.reduce((a, b) => {
  return a * b;
});
console.log(product);
// 3. Find the maximum number.
const maximum = number.reduce((a, b) => {
  return a > b ? a : b;
});
console.log(maximum);
// 4. Count how many elements are even.
const countEven = number.reduce((count, num) => {
  return num % 2 == 0 ? count + 1 : count;
}, 0);
console.log(countEven);

// 5. Reverse a string using `reduce`.

// ---

// If you want **mixed difficulty**, **IGNOU-style**, or **interview-level tasks**, tell me 👍
