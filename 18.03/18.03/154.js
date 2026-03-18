const user = { name: "eva", address: { city: "Moscow", street: "Lenin" } };
const { name, address: { city, street } } = user;
console.log(name, city, street);