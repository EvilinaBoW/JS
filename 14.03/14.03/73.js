function User(name) {
  if (!new.target) return new User(name);
  this.name = name;
}
const u = User("Ева");
console.log(u);