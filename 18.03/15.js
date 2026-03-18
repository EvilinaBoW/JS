function typeStats(arr) {
  const stats = {};
  arr.forEach(v => {
    let t = typeof v;
    if (v === null) t = "null";
    if (Array.isArray(v)) t = "array";
    stats[t] = (stats[t] || 0) + 1;
  });
  return stats;
}
console.log(typeStats([1, "a", {}, [], null, true]));