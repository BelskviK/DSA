/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const magazineCount = {};

    // Count each character in the magazine
    for (let char of magazine) {
        magazineCount[char] = (magazineCount[char] || 0) + 1;
    }
 
    for (let char of ransomNote) {
        if (!magazineCount[char]) {
            return false;  
        }
        magazineCount[char]--;  
    }

    return true;
};
