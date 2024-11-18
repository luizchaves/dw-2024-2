// decision statements
const number1 = 10;
const number2 = 10;
const operator = '+'; // (+, -)
let result;

// if
// if (operator === '+') {
//   result = number1 + number2;
// } else if (operator === '-') {
//   result = number1 - number2;
// } else {
//   result = 'Invalid operator';
// }

// switch
switch (operator) {
  case '+':
    result = number1 + number2;
    break;
  case '-':
    result = number1 - number2;
    break;
  default:
    result = 'Invalid operator';
}

console.log(result); //=> 20

// repeat statements

// while
let flag = 0;

while (flag <= 10) {
  console.log(flag);
  flag++;
}

// do-while
flag = 0;

do {
  console.log(flag);
  flag++;
} while (flag <= 10);

// for
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// 00, 01, 02, 03, 04, 05, 06, 07, 08, 09,
// 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
// 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
// 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
// 40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
// 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
// 60, 61, 62, 63, 64, 65, 66, 67, 68, 69,
// 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
// 80, 81, 82, 83, 84, 85, 86, 87, 88, 89,
// 90, 91, 92, 93, 94, 95, 96, 97, 98, 99,
result = '';

for (let flag = 0; flag < 100; flag++) {
  if (flag < 10) {
    result += '0';
  }

  result += `${flag},`;

  // if (flag % 10 === 9) {
  //   result += '\n';
  // } else {
  //   result += ' ';
  // }
  result = flag % 10 === 9 ? `${result}\n` : `${result} `;
}

console.log(result);
