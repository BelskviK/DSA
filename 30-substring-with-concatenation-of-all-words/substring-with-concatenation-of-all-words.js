/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    if (words.length === 0 || s.length === 0) return [];

    const wordLength = words[0].length;
    const numWords = words.length;
    const totalLength = wordLength * numWords;
    const wordCount = new Map();

    // Count frequency of words
    for (const word of words) {
        wordCount.set(word, (wordCount.get(word) || 0) + 1);
    }

    const result = [];

    // Check for all possible shifts within word length
    for (let i = 0; i < wordLength; i++) {
        let left = i;
        let right = i;
        let seen = new Map();
        let count = 0;

        while (right + wordLength <= s.length) {
            const word = s.substring(right, right + wordLength);
            right += wordLength;

            if (wordCount.has(word)) {
                seen.set(word, (seen.get(word) || 0) + 1);
                count++;

                // If word is seen too many times, move left pointer
                while (seen.get(word) > wordCount.get(word)) {
                    const leftWord = s.substring(left, left + wordLength);
                    seen.set(leftWord, seen.get(leftWord) - 1);
                    left += wordLength;
                    count--;
                }

                if (count === numWords) {
                    result.push(left);
                }
            } else {
                // Reset if word not in target list
                seen.clear();
                count = 0;
                left = right;
            }
        }
    }

    return result;
};
