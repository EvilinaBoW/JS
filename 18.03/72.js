const arr = [1, 2, 3, 4, 5];
console.log(arr.slice(1, 4));
const copy = [...arr];
copy.splice(1, 2);
console.log(copy);