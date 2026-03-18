const user = {
  name: "Ева",
  sayHi() {
    console.log("Привет, я " + this.name);
  }
};
user.sayHi();