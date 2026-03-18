class MyArray extends Array {
  static get [Symbol.species]() { return Array; }
}
const arr = new MyArray(1, 2, 3);
const mapped = arr.map(x => x * 2);
console.log(mapped instanceof MyArray);