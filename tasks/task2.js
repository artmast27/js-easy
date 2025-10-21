// task2.js
function reverse(str) {
  if (typeof str !== "string") str = String(str);
  let out = "";
  for (let i = str.length - 1; i >= 0; i--) out += str[i];
  return out;
}
module.exports = reverse;
