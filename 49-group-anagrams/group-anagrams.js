/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = {};

    for (let str of strs) {
        // Sort the characters of the string to form a key
        const key = str.split('').sort().join('');

        // Add the string to the corresponding group in the map
        if (!map[key]) {
            map[key] = [];
        }
        map[key].push(str);
    }

    // Return all the grouped anagrams
    return Object.values(map);
};
