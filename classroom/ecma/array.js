// create array with values
let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(values[0]); // 1
console.log(values[9]); // 10
console.log(values.at(-1)); // 10

// adding values
values.push(11);
console.log(values); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

const numbers = [];
numbers[0] = 1;
numbers.push(2);
console.log(numbers); // [1, 2]

// changing values
values[0] = 0;

// removing values
console.log(values); // [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

values.pop();
console.log(values); // [0, 2, 3, 4, 5, 6, 7, 8, 9, 10]

values.shift();
console.log(values); // [2, 3, 4, 5, 6, 7, 8, 9, 10]

delete values[0];
console.log(values); // [undefined, 3, 4, 5, 6, 7, 8, 9, 10]

values.splice(0, 1);
console.log(values); // [3, 4, 5, 6, 7, 8, 9, 10]

// multiple types
const person = ['John Doe', 25, true, ['john.doe@email.com']];
console.log(person[0]); // John Doe
console.log(person[3][0]); // john.doe@email.com

// destructuring arrays
// const name = 'John Doe';
// const age = 25;
// const isActive = true;
// const contacts = ['john.doe@email.com'];

// const name = person[0];
// const age = person[1];
// const isActive = person[2];
// const contacts = person[3];

const [name, age, isActive, contacts] = person;
const [, , , [email]] = person;

// spread operator
console.log(Math.min(10, 1, 100)); // 1
console.log(values); // [3, 4, 5, 6, 7, 8, 9, 10]
console.log(Math.min(values)); // NaN
console.log(Math.min(...values)); // 3

// clone array
const x = [1, 2, 3];

// x -> [1, 2, 3] <- y
const y = x;

y.push(4);
console.log(x); // [1, 2, 3, 4]

const z = [...x];

z.push(5);
console.log(x); // [1, 2, 3, 4]

// iteration
console.log(values); // [3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < values.length; i++) {
  console.log(values[i]);
}

// values
for (const value of values) {
  console.log(value);
}

// keys of values
for (const key in values) {
  console.log(key);
}

// entries
for (const [key, value] of values.entries()) {
  console.log(key, value);
}

// Object Array

// Property: length
values = [1, 2, 3];
console.log(values.length); // 3

// Mutator: push(), unshift(), pop(), shift(), reverse(), sort(), splice()
values.push(4);
console.log(values); // [1, 2, 3, 4]

values.unshift(0);
console.log(values); // [0, 1, 2, 3, 4]

values.pop();
console.log(values); // [0, 1, 2, 3]

values.shift();
console.log(values); // [1, 2, 3]

values.reverse();
console.log(values); // [3, 2, 1]

console.log([1, 10, 2].sort()); // [1, 10, 2]
console.log([1, 10, 2].sort((a, b) => a - b)); // [1, 2, 10]

// Accessor: includes(), join(), slice(), toReversed(), toSorted(), toSpliced()
console.log(values.includes(2)); // true

console.log(values.join()); // '1,2,3'
console.log(values.join(', ')); // '1, 2, 3'
console.log(values.join('|')); // '1|2|3'

console.log(values.slice(1, 2)); // [2]
console.log(values.slice(1, 3)); // [2, 1]

console.log(values); // [3, 2, 1]

console.log(values.toReversed()); // [1, 2, 3]
console.log(values); // [3, 2, 1]
// Iteration: forEach(), map(), filter(), reduce(), every(), some()
values = [1, 2, 3];
console.log(values.map((value) => value * 2)); // [2, 4, 6]

// filter is not nullable
values = [1, , , 4, , 0, 10];
console.log(values.filter((value) => value !== undefined)); // [1, 4, 0, 10]

values = [1, 2, 3];
console.log(values.reduce((acc, value) => acc + value, 0)); // 6
// value, acc, (acc, value) => acc + value
// 1    , 0  , 1
// 2    , 1  , 3
// 3    , 3  , 6

const cart = [
  { name: 'TV', price: 200000 },
  { name: 'Smartphone', price: 100000 },
];
console.log(cart.reduce((acc, product) => acc + product.price, 0)); // 300000
// min price using reduce
console.log(
  cart.reduce(
    (acc, product) => (acc < product.price ? acc : product.price),
    cart[0].price
  )
); // 100000
Math.min(...cart.map((product) => product.price)); // 100000

console.log(values.some((value) => value < 150000)); // true

console.log(values.every((value) => value < 150000)); // false
