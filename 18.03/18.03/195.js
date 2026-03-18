const map = new Map([["a", 1], ["b", 2]]);
const json = JSON.stringify(Object.fromEntries(map));
const restored = new Map(Object.entries(JSON.parse(json)));
console.log(restored);