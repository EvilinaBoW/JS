function Counter() {
  let val = 0;
  this.increment = () => val++;
  this.decrement = () => val--;
  Object.defineProperty(this, "value", { get: () => val });
}
const c = new Counter();
c.increment();
console.log(c.value);