const range = { from: 1, to: 4, [Symbol.iterator]: function* () { for (let i = this.from; i <= this.to; i++) yield i; } };
console.log([...range]);