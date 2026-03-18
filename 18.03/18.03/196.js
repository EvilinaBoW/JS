const set = new Set([1, 2, 3]);
const json = JSON.stringify([...set]);
const restored = new Set(JSON.parse(json));
console.log(restored);