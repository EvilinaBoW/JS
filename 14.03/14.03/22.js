const obj = {};
Object.defineProperty(obj, "name", { value: "Иван", writable: false });
obj.name = "Петр";
console.log(obj.name);