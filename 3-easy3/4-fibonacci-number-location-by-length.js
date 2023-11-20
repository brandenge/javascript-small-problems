// Recursive solution fails for any length above about 1800
// due to stack overflow, depending on environment
function findFibonacciIndexByLength(length, n = 2n, memo = {0n: 0n, 1n: 1n, 2n: 1n}) {
  memo[n] = memo[n - 1n] + memo[n - 2n];
  if (length == memo[n].toString().length) { return n; }
  return findFibonacciIndexByLength(length, n + 1n, memo);
}

function findFibonacciIndexByLength(length) {
  let n = 2n;
  let prev = 1n;
  let curr = 1n;
  while (curr.toString().length != length) {
    [prev, curr] = [curr, prev + curr];
    n++;
  }
  return n;
}

console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.
