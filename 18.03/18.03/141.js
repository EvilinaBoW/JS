const obj = { a: 1, b: 10, c: 5 };
const filtered = Object.fromEntries(Object.entries(obj).filter(([k, v]) => v > 5));
console.log(filtered);