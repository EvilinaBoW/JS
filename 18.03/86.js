const names = ["ivan", "anna"];
const users = names.map((name, i) => ({ id: i + 1, name }));
console.log(users);