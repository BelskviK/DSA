/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false; // Different lengths = not anagrams

    const count = {};

    // Count each letter in s
    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }

    // Subtract counts using t
    for (let char of t) {
        if (!count[char]) return false; // Letter missing or overused
        count[char]--;
    }

    return true; // All counts balanced
};
