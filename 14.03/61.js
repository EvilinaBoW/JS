function fn() { console.log(this.a); }
const b1 = fn.bind({ a: 1 });
const b2 = b1.bind({ a: 2 });
b2();