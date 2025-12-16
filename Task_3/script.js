//Write a function that takes a number and a callback. The callback should check whether the number is even or odd.
function number(num, callback) {
  return callback(num);
}
function oddEven(num) {
  if (num % 2 === 0) {
    console.log(`The ${num} is even`);
  } else {
    console.log(`The ${num} is odd.`);
  }
}
number(2, oddEven);

//Create a function calculate(a, b, callback) that performs addition, subtraction, multiplication, or division based on the callback passed.
function calc(a, b, callback) {
  return callback(a, b);
}
function add(a, b) {
  console.log(`${a} + ${b} =${a + b}`);
}
function sub(a, b) {
  console.log(`${a} - ${b} =${a - b}`);
}
function mul(a, b) {
  console.log(`${a} * ${b} =${a * b}`);
}
function div(a, b) {
  console.log(`${a} / ${b} =${a / b}`);
}
calc(2, 3, add);
calc(3, 3, sub);
calc(4, 3, mul);
calc(6, 3, div);

//Write a function that accepts a string and a callback. The callback should return the string in uppercase.

function string(word, callback) {
  return callback(word);
}
function upperCase(word) {
  let res = word.toUpperCase();
  return res;
}
console.log(string("Hello World", upperCase));
