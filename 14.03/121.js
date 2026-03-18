const range = {
  from: 1,
  to: 10,
  [Symbol.toPrimitive](hint) {
    return hint === "number" ? this.to : `[${this.from}-${this.to}]`;
  }
};
console.log(range + 5);