const obj = {
  name: "Иван",
  sayHi() { console.log(this.name); }
};
setTimeout(obj.sayHi, 1000); 
// Способ 1
setTimeout(obj.sayHi.bind(obj), 1000);
// Способ 2
setTimeout(() => obj.sayHi(), 1000);
// Способ 3
setTimeout(function() { obj.sayHi(); }, 1000);