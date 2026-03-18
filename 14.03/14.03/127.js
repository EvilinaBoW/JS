const obj = { own: 1 };
for (let key in obj) {
  if (obj.hasOwnProperty(key)) console.log(key);
}