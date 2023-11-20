function multisum(n) {
  return [...Array(n)].map((_, i) => i + 1)
    .filter((n) => n % 3 === 0 || n % 5 === 0)
    .reduce((sum, n) => sum + n);
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168
