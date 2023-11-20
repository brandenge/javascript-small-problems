const input = require('readline-sync');
const n = parseInt(input.question('Please enter an integer greater than 0: '));
const operation = input.question('Enter "s" to compute the sum, or "p" to compute the product. ');

ints = [...Array(n)].map((_, i) => i + 1);
switch (operation) {
  case 's':
    const sum = ints.reduce((acc, n) => acc + n);
    console.log(`The sum of the integers between 1 and ${n} is ${sum}.`);
    break;
  case 'p':
    const product = ints.reduce((acc, n) => acc * n);
    console.log(`The product of the integers between 1 and ${n} is ${product}.`);
    break;
}
