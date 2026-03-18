const user = {
  name: "Ева",
  sayHi() {
    console.log(this.name);
  }
};
setTimeout(user.sayHi, 1000);