// task4.js
function evens(arr) {
  if (!Array.isArray(arr)) throw new Error("Expected array");
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const n = Number(arr[i]);
    if (!Number.isNaN(n) && n % 2 === 0) result.push(n);
  }
  return result;
}
module.exports = evens;
