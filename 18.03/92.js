Array.prototype.myMap = function(fn) {
  const res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(fn(this[i], i, this));
  }
  return res;
};
console.log([1, 2, 3].myMap(x => x * 2));