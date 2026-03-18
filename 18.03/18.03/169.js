const d1 = new Date("2025-03-01");
const d2 = new Date("2025-03-10");
const diff = Math.floor((d2 - d1) / (1000 * 60 * 60 * 24));
console.log(diff);