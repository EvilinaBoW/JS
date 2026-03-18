const json = '{"created":"2025-03-18T10:00:00Z"}';
const obj = JSON.parse(json, (k, v) => (k === "created" ? new Date(v) : v));
console.log(obj.created);