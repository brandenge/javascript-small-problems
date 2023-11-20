function isOdd(n) {
  return n % 2 == 0 ? false : true
}

function isOdd(n) {
  return Math.abs(n) % 2 === 1
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true
