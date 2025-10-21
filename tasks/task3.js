// task3.js
function maxInArray(arr) {
  if (!Array.isArray(arr)) throw new Error("Expected array");
  if (arr.length === 0) throw new Error("Array must not be empty");
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    const val = Number(arr[i]);
    if (Number.isNaN(val)) throw new Error("Array must contain only numbers");
    if (val > max) max = val;
  }
  return max;
}
module.exports = maxInArray;
