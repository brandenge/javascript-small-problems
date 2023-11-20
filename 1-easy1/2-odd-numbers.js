// Helper function used below - leave uncommented
function range(start, stop, step) {
  return Array.from({ length: (stop - start) / step + 1 }, (n, i) => start + i * step);
}

// Use a regular for loop
for (let i = 1; i < 100; i += 2) {
  console.log(i);
}

// Use a for-of loop and .entries method
for ([i, _] of Array(50).entries()) {
  console.log(i * 2 + 1);
}

// Use a for-in loop with Array() and the spread operator
for (i in [...Array(50)]) {
  console.log(i * 2 + 1);
}

// Use Array() to create an array iterator object and then use .keys()
// Only works with a for-of loop specifically
for (n of Array(100).keys()) {
  if (n % 2 == 1) { console.log(n); }
}

// Create an array iterator object and then using .fill and .map
for (n of Array(50).fill(0).map((n, i) => i * 2 + 1)) {
  console.log(n);
}

// Use Array.from with an array
arr = [...Array(50)]
for (n of Array.from(arr, (n, i) => i * 2 + 1)) {
  console.log(n);
}

// Use Array.from using the length property on an object
// Creates an array iterator
for (n of Array.from({ length: 50 }, (n, i) => i * 2 + 1)) {
  console.log(n);
}

// Use a range function wrapper around Array.from
function range(start, stop, step) {
  return Array.from({ length: (stop - start) / step + 1 }, (n, i) => start + i * step);
}
for (n of range(1, 99, 2)) {
  console.log(n);
}

// Use a generator function
function* range(start, stop, step) {
  while (start <= stop) {
    yield start;
    start += step;
  }
}

for (n of range(1, 99 , 2)) {
  console.log(n);
}

// Use the yield* operator to delegate to another generator
function* range(start, stop, step) {
  while (start <= stop) {
    yield start;
    start += step;
  }
}

function* otherGenerator() {
  yield* range(1, 99, 2);
}

for (n of otherGenerator()) {
  console.log(n);
}

// Create an iterator object that maintains its state and has a next method
const iterator = {
  data: range(1, 99, 2),
  currentIndex: 0,
  next: function() {
    if (this.currentIndex < this.data.length) {
      return {
        value: this.data[this.currentIndex++],
        done: false
      }
    } else {
      return { done: true };
    }
  }
}

// Iteration loop example #1
nextItem = iterator.next()
while (!nextItem.done) {
  console.log(nextItem.value)
  nextItem = iterator.next()
}

// Iteration loop example #2
while (true) {
  const { value, done } = iterator.next();
  if (done) break;
  console.log(value)
}

// Create the same iterator object as a class
class Iterator {
  constructor(iterable) {
    this.currentIndex = 0;
    // The iterable passed in will have Symbol.iterator defined already
    this.items = iterable;
  }
  next() {
    if (this.currentIndex < this.items.length) {
      return {
        value: this.items[this.currentIndex++],
        done: false
      };
    } else {
      return { done: true };
    }
  }
  logger() {
    console.log(this.next().value)
  }
}

arr = range(1, 99, 2);
iter = new Iterator(arr);
iter.logger();

// Create an iterable with [Symbol.iterator] defined so that
// it can be used like a generator, in a for-of loop, or the spread operator
const iterable = {
  items: range(1, 99, 2),
  [Symbol.iterator]: function() {
    let currentIndex = 0
    return {
      next: function() {
        if (currentIndex < this.items.length) {
          return { value: this.items[currentIndex++], done: false };
        } else {
          return { done: true };
        }
      }.bind(this)
    }
  }
}

for (let val of iterable) {
  console.log(val)
}

console.log([...iterable])

// Create the iterable as a class
class Iterable1 {
  constructor(iterable) {
    this.items = iterable;
  }

  [Symbol.iterator]() {
    let currentIndex = 0;
    return {
      next: function() {
        if (currentIndex < this.items.length) {
          return { value: this.items[currentIndex++], done: false };
        } else {
          return { done: true };
        }
      }.bind(this)
    }
  }
}

let iterable1 = new Iterable1(range(1, 99, 2))

for (let val of iterable1) {
  console.log(val)
}

console.log([...iterable1])

// Create the iterable as a class using an instance variable to track the index
class Iterable2 {
  constructor(iterable) {
    this.items = iterable;
    this.currentIndex = 0;
  }

  [Symbol.iterator]() {
    // The fix
    if (this.currentIndex === this.items.length) { this.currentIndex = 0; }
    return {
      next: function() {
        if (this.currentIndex < this.items.length) {
          return { value: this.items[this.currentIndex++], done: false };
        } else {
          return { done: true };
        }
      }.bind(this)
    }
  }
}

let iterable2 = new Iterable2(range(1, 99, 2))

for (let val of iterable2) {
  console.log(val)
}

console.log([...iterable2])
