function checkType(v) {
  if (Array.isArray(v)) return "array";
  if (typeof v === "function") return "function";
  if (v !== null && typeof v === "object") return "object";
  return "primitive";
}
console.log(checkType([]));
console.log(checkType({}));
console.log(checkType(() => {}));
console.log(checkType(42));