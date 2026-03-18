const target = new Date("2026-01-01");
setInterval(() => {
  const diff = Math.floor((target - Date.now()) / 1000);
  console.log(diff);
}, 1000);