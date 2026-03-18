function callMethod(v) {
  if (typeof v === "string") return v.toUpperCase();
  if (typeof v === "number") return v.toFixed(2);
  if (typeof v === "boolean") return v.toString();
  return v;
}
console.log(callMethod("hello"));
console.log(callMethod(123));