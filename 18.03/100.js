const range = {
  from: 1,
  to: 5,
  [Symbol.iterator]() {
    let current = this.from;
    return {
      next: () => ({
        done: current > this.to,
        value: current++
      })
    };
  }
};
console.log([...range]);