const money = {
  amount: 100,
  currency: "RUB",
  valueOf() { return this.amount; },
  toString() { return `${this.amount} ${this.currency}`; }
};
console.log(String(money));
console.log(Number(money));