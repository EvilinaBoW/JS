Array.prototype.myReduce = function(fn, init) {
  let acc = init;
  for (let i = 0; i < this.length; i++) {
    acc = fn(acc, this[i], i, this);
  }
  return acc;
};
console.log([1, 2, 3].myReduce((a, b) => a + b, 0));