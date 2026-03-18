function isPlainObject(value) {
  return Object.prototype.toString.call(value) === "[object Object]" && !Array.isArray(value) && value !== null;
}
console.log(isPlainObject({}));
console.log(isPlainObject([]));
console.log(isPlainObject(null));