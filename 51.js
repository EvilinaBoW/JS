function flatten(arr, acc = []) {
  for (let item of arr) {
    Array.isArray(item) ? flatten(item, acc) : acc.push(item);
  }
  return acc;
}