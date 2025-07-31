/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  const words = s.trim().split(/\s+/); // handles multiple spaces safely
  if (words.length !== pattern.length) return false;

  const p2w = new Map(); // pattern char -> word
  const w2p = new Map(); // word -> pattern char

  for (let i = 0; i < pattern.length; i++) {
    const p = pattern[i];
    const w = words[i];

    if (p2w.has(p) && p2w.get(p) !== w) return false;
    if (w2p.has(w) && w2p.get(w) !== p) return false;

    p2w.set(p, w);
    w2p.set(w, p);
  }
  return true;
};
