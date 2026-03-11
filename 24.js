function pureAdd(a, b) {
  return a + b;
}
let total = 0;
function impureAdd(x) {
  total += x;
  return total;
}