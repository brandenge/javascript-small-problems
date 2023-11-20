function centerOf(string) {
  const mid = parseInt(string.length / 2);
  return string.length % 2 == 1 ? string[mid] : string.slice(mid - 1, mid + 1);
}

function centerOf(string) {
  const mid = parseInt(string.length / 2);
  return string.length % 2 == 1 ? string[mid] : string.substring(mid - 1, mid + 1);
}

function centerOf(string) {
  return string.slice(parseInt((string.length - 1) / 2),
                      parseInt((string.length + 2) / 2));
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"
