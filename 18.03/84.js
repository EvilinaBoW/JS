const nums = [5, 1, 10, 3];
console.log([...nums].sort((a, b) => a - b));
console.log([...nums].sort((a, b) => b - a));