const input = require('readline-sync');
const op1 = BigInt(parseInt(input.question('Enter the first number: ')));
const op2 = BigInt(parseInt(input.question('Enter the second number: ')));

console.log(`${op1} + ${op2} = ${op1 + op2}`);
console.log(`${op1} - ${op2} = ${op1 - op2}`);
console.log(`${op1} * ${op2} = ${op1 * op2}`);
console.log(`${op1} / ${op2} = ${parseInt(op1 / op2)}`);
console.log(`${op1} % ${op2} = ${op1 % op2}`);
console.log(`${op1} ** ${op2} = ${op1 ** op2}`);
