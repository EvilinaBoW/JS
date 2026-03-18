function zip(...arrs) {
  const length = Math.min(...arrs.map(a => a.length));
  return Array.from({ length }, (_, i) => arrs.map(a => a[i]));
}