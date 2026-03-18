function groupBy(arr, keyFn) {
  return arr.reduce((acc, item) => {
    const key = keyFn(item);
    acc[key] = (acc[key] || []).concat(item);
    return acc;
  }, {});
}
console.log(groupBy([1, 2, 3, 4], x => x % 2));