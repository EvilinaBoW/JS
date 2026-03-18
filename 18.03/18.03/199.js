function saveState(obj) {
  return JSON.stringify(obj);
}
function loadState(json) {
  return JSON.parse(json);
}
const state = { score: 100 };
const saved = saveState(state);
console.log(loadState(saved));