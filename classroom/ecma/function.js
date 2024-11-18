// function declaration
function sum(a, b) {
  return a + b;
}

console.log(sum(1)); // NaN
console.log(sum(1, 2)); // 3
console.log(sum(1, 2, 3)); // 3

// function expression
const subtract = function (a, b) {
  return a - b;
};

console.log(subtract(1, 2)); // -1

// arrow function
const multiply = (a, b) => {
  return a * b;
};

console.log(multiply(2, 3)); // 6

// arrow function with implicit return
const divide = (a, b) => a / b;

console.log(divide(6, 3)); // 2

// spread operator
function summation(...numbers) {
  let sum = 0;

  for (const number of numbers) {
    sum += number;
  }

  return sum;
}

console.log(summation(1)); // 1
console.log(summation(1, 2)); // 3
console.log(summation(1, 2, 3)); // 6
console.log(summation(1, 2, 3, 4)); // 10

// default parameter
function pow(base, exponent = 1) {
  return base ** exponent;
}

console.log(pow(2)); // 2
console.log(pow(2, 3)); // 8

// callback
function calc(a, b, callback) {
  return callback(a, b);
}

console.log(calc(2, 3, (a, b) => a + b)); // 5
console.log(calc(2, 3, sum)); // 5
