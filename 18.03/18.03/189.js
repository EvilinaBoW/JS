const obj = { a: 1, b: 2 };
console.log(JSON.stringify(obj, (k, v) => (k === "b" ? undefined : v)));