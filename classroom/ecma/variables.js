const value = 10;

// 'const' declarations must be initialized.
// const x;

// TypeError: Assignment to constant variable.
// value = 20;

// Cannot redeclare block-scoped variable 'value'.
// const value = 100;

function test() {
  const value = 20;
}

let values;

values = 20;

let names = ['alice', 'bob', 'charlie'];

names = 'alice, bob, charlie';

var x = 10;
