import { sum, sumOdds, product } from './array-operations.js';

console.log(sum(1, 2, 3)); // 6
console.log(sum(2, 2, 2)); // 6
console.log(sum(1, 2, 3, 4, 5, 6)); // 21
console.log(sumOdds(1, 2, 3)); // 4
console.log(sumOdds(2, 2, 2)); // 0
console.log(sumOdds(1, 2, 3, 4, 5, 6)); // 9
console.log(product(1, 2, 3)); // 6
console.log(product(2, 2, 2)); // 8
console.log(product(1, 2, 3, 4, 5, 6)); // 720
