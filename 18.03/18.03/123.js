const obj = { 1: "one" };
const map = new Map([[1, "one"]]);
console.log(obj[1], map.get(1));
console.log(typeof Object.keys(obj)[0]);