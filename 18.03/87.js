const nested = [[1, 2], [3, 4]];
console.log(nested.flat());
console.log([1, 2, 3].flatMap(x => [x, x * 10]));