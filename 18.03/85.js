const arr = ["a", "b", "a", "c", "b"];
const freq = arr.reduce((acc, v) => {
  acc[v] = (acc[v] || 0) + 1;
  return acc;
}, {});
console.log(freq);