const secret = Symbol("secret");
const user = {
  name: "Иван",
  [secret]: "password123"
};
console.log(user[secret]);