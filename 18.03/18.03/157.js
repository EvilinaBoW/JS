const obj = { a: 1, b: 2 };
for (let [key, value] of Object.entries(obj)) {
  console.log(key, value);
}