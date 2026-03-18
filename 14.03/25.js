const user = {
  _name: "Иван",
  get name() { return this._name.toUpperCase(); },
  set name(v) { this._name = v; }
};
console.log(user.name);
user.name = "Петр";
console.log(user.name);