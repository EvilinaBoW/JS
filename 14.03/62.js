const obj = {
  step: 0,
  next() { this.step++; return this; }
};
obj.next().next();
console.log(obj.step);