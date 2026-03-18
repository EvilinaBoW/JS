const obj = { nested: { x: 1 } };
const copy = JSON.parse(JSON.stringify(obj));
console.log(copy);