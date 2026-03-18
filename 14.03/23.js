const obj = { name: "Иван" };
const desc = Object.getOwnPropertyDescriptor(obj, "name");
console.log(desc);