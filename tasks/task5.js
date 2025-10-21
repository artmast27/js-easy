// task5.js
function capitalizeWords(sentence) {
  if (sentence == null) return "";
  const s = String(sentence);
  const words = s.split(" ");
  for (let i = 0; i < words.length; i++) {
    const w = words[i];
    if (w.length === 0) continue;
    const first = w[0].toUpperCase();
    const rest = w.slice(1).toLowerCase();
    words[i] = first + rest;
  }
  return words.join(" ");
}
module.exports = capitalizeWords;
