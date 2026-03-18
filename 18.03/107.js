const skipEven = {
  from: 1,
  to: 10,
  [Symbol.iterator]() {
    let current = this.from;
    return {
      next: () => {
        while (current <= this.to && current % 2 === 0) current++;
        if (current > this.to) return { done: true };
        return { value: current++, done: false };
      }
    };
  }
};
console.log([...skipEven]);