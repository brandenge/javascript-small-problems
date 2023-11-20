const input = require('readline-sync');
const SQMETERS_TO_SQFEET = 10.7639;

console.log('Enter the length of the room in meters:')
let length = input.prompt();
length = parseFloat(length);
console.log('Enter the width of the room in meters:')
let width = input.prompt();
width = parseFloat(width);
squareMeters = length * width;
squareFeet = squareMeters * SQMETERS_TO_SQFEET;
console.log(`The area of the room is ${squareMeters.toFixed(2)} square meters (${squareFeet.toFixed(2)} square feet).`);
