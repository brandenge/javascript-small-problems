const crunch = string => string.replace(/(.)\1*/gi, '$1');

function crunch(string) {
  res = '';
  prev = '';
  for (let char of string) {
    if (char === prev) {
      continue;
    } else {
      res += char;
      prev = char;
    }
  }
  return res;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""
