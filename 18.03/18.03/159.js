function normalizeUser(user) {
  const { name = "Unknown", age = 0, address: { city = "No city" } = {} } = user;
  return { name, age, city };
}
console.log(normalizeUser({ name: "ivan" }));