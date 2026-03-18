const obj = { a: 1, b: "x", c: 2, d: 3 };
obj[Symbol.iterator] = function* () {
  for (let key in this) {
    if (typeof this[key] === "number") yield this[key];
  }
};
console.log([...obj]);