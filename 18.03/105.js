const infinite = {
  [Symbol.iterator]() {
    let n = 0;
    return { next: () => ({ value: n++, done: false }) };
  }
};
const iter = infinite[Symbol.iterator]();
console.log(iter.next().value);
console.log(iter.next().value);