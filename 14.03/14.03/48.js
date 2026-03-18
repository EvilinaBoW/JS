const registry = new FinalizationRegistry(v => console.log("Удалён:", v));
let obj = {};
registry.register(obj, "myObj");
obj = null;