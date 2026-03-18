const obj = { [Symbol.iterator]: function* () { yield 1; yield 2; yield 3; } };
const [a, b, c] = obj;
console.log(a, b, c);