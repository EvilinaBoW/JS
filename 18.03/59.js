function parseQuery(str) {
  return Object.fromEntries(str.split("&").map(p => p.split("=")));
}
console.log(parseQuery("name=Ivan&age=20"));