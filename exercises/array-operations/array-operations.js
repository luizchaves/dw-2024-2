export function sum(...values) {
  // let sum = 0;

  // for (const value of values) {
  //   sum += value;
  // }

  // return sum;

  return values.reduce((acc, value) => acc + value, 0);
}

export function sumOdds(...values) {
  // let sum = 0;

  // for (const value of values) {
  //   if (value % 2 !== 0) {
  //     sum += value;
  //   }
  // }

  // return sum;

  // return values
  //   .filter((value) => value % 2 !== 0)
  //   .reduce((acc, value) => acc + value, 0);

  return values.reduce(
    (acc, value) => (value % 2 !== 0 ? acc + value : acc),
    0
  );
}

export function product(...values) {
  // let product = 1;

  // for (const value of values) {
  //   product *= value;
  // }

  // return product;

  return values.reduce((acc, value) => acc * value, 1);
}
