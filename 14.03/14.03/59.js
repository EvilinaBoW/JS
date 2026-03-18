function greet(greeting) {
  console.log(greeting + " " + this.name);
}
const user = { name: "Ева" };
greet.call(user, "Привет");