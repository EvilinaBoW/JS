function getType(value) {
  if (value === null) return "null";
  if (Array.isArray(value)) return "array";
  return typeof value;
}
console.log(getType(null));
console.log(getType([]));
console.log(getType({}));
console.log(getType(67));