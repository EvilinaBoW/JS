const a = [1, 2, 3];
const b = [2, 3, 4];
const inter = [...new Set(a.filter(x => new Set(b).has(x)))];
console.log(inter);