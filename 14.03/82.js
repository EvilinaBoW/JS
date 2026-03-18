function createUserFactory(type) {
  return function(name) {
    if (type === "admin") return new AdminUser(name);
    return new RegularUser(name);
  };
}