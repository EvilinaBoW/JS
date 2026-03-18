const obj = { name: "Ева" };
Object.seal(obj);
obj.name = "Джо";
delete obj.name;
console.log(obj);