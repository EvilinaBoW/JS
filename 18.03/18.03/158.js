const data = { user: { name: "ivan", scores: [10, 20] } };
const { user: { name = "guest", scores: [first = 0, second = 0] } } = data;
console.log(name, first, second);