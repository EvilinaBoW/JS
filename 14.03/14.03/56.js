const user = {
  name: "Ева",
  sayHi() {
    console.log(this.name);
  }
};
setTimeout(user.sayHi.bind(user), 1000);