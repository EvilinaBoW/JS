const user = {
  name: "Иван",
  age: 25,
  toString() { return `${this.name} (${this.age})`; }
};
console.log(String(user));