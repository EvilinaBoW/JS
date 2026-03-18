const obj = { nested: { y: 1 } };
const shallow = { ...obj };
shallow.nested.y = 2;
console.log(obj.nested.y);