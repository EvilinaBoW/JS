const obj = {
  [Symbol.toPrimitive](hint) {
    return hint === "number" ? 42 : "объект";
  }
};
console.log(+obj);
console.log(String(obj));