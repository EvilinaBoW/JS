const user = { name: "Иван", sayHi() { console.log(this.name); } };
const { sayHi } = user;
sayHi(); 
const fixed = user.sayHi.bind(user);
fixed();