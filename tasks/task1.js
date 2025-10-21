// task1.js
function sum(a, b) {
  const x = Number(a);
  const y = Number(b);
  if (Number.isNaN(x) || Number.isNaN(y)) {
    throw new Error("Inputs must be numbers or numeric strings");
  }
  return x + y;
}
module.exports = sum;
