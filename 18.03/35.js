function isFiniteNumber(v) {
  return typeof v === "number" && isFinite(v) && !isNaN(v);
}
console.log(isFiniteNumber(42));
console.log(isFiniteNumber(Infinity));
console.log(isFiniteNumber(NaN));