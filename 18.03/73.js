function unique(arr) {
  const res = [];
  for (let item of arr) {
    if (!res.includes(item)) res.push(item);
  }
  return res;
}
console.log(unique([1, 2, 2, 3, 1]));