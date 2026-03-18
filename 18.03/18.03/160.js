const range = { [Symbol.iterator]: function* () { yield 1; yield 2; yield 3; } };
const [a, b, c] = range;
console.log(a, b, c);