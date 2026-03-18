const str = "hello world hello";
const words = str.split(" ");
const freq = new Map();
words.forEach(w => freq.set(w, (freq.get(w) || 0) + 1));
console.log(Object.fromEntries(freq));