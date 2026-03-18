function flattenOneLevel(arr) {
  return arr.reduce((a, v) => a.concat(v), []);
}
console.log(flattenOneLevel([[1, 2], [3], [[4]]]));