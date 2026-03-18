function getReadableType(v) {
  if (v === null) return "null";
  if (Array.isArray(v)) return "array";
  if (typeof v === "function") return "function";
  return typeof v;
}
console.log(getReadableType(null));
console.log(getReadableType([]));
console.log(getReadableType(123));