const data = {
  user: {
    name: "ivan",
    toJSON() { return { full: this.name.toUpperCase() }; }
  },
  toJSON() { return { version: "1.0", user: this.user }; }
};
console.log(JSON.stringify(data));