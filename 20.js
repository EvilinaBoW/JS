function clamp(val, min, max) {
  return Math.max(min, Math.min(max, val));
}

console.log(clamp(15, 10, 20));
console.log(clamp(5, 10, 20));
console.log(clamp(30, 10, 20));