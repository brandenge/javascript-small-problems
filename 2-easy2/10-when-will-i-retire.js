const input = require('readline-sync');
const currentAge = parseInt(input.question('What is your age? '));
const retirementAge = parseInt(input.question('At what age would you like to retire? '));
const currentYear = new Date().getFullYear();
const workYears = retirementAge - currentAge;
const retirementYear = currentYear + workYears;

console.log(`It's ${currentYear}. You will retire in ${retirementYear}.`);
console.log(`You have only ${retirementAge - currentAge} years of work to go!`);
