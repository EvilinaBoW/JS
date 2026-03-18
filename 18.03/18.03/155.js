function greet({ name, age = 18 }) {
  console.log(`Привет ${name}, тебе ${age}`);
}
greet({ name: "eva" });