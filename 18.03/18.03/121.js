function groupBy(arr, keyFn) {
  const map = new Map();
  arr.forEach(item => {
    const key = keyFn(item);
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(item);
  });
  return map;
}
console.log(groupBy([1, 2, 3, 4], x => x % 2));