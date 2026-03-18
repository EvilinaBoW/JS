function sumValues(obj) {
  return Object.values(obj).reduce((a, v) => a + (typeof v === "number" ? v : 0), 0);
}
console.log(sumValues({ a: 10, b: 20, c: "x" }));