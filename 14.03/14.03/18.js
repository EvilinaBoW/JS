const obj = { name: "Ева" };
Object.freeze(obj);
obj.name = "Джо";
delete obj.name;
console.log(obj);