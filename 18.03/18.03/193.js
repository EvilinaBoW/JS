const user = {
  name: "eva",
  toJSON() {
    return { fullName: this.name.toUpperCase() };
  }
};
console.log(JSON.stringify(user));