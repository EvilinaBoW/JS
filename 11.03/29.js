function greet(greeting) {
  console.log(greeting + " " + this.name);
}
const user = { name: "Алекс" };
greet.call(user, "Привет");
greet.apply(user, ["Привет"]);
const bound = greet.bind(user);
bound("Привет");