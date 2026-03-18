const original = [1, 2, 3];
const copy1 = [...original];
const copy2 = original.slice();
console.log(copy1 === original);
console.log(copy2 === original);