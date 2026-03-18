function greet() {
  console.log(this.name);
}
const user = { name: "Иван" };
const bound = greet.bind(user);
bound();