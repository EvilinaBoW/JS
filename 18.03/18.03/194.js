const obj = { x: 1, toJSON: () => "custom" };
console.log(JSON.stringify(obj));