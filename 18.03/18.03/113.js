const m = new Map();
m.set("key", "value");
console.log(m.get("key"));
console.log(m.has("key"));
m.delete("key");
console.log(m.has("key"));