function triangle(n) {
  for (let i = 0; i <= n; i++) {
    console.log(' '.repeat(n - i) + '*'.repeat(i));
  }
}

triangle(5);
triangle(9);
