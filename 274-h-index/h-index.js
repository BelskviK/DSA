/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    // Sort citations in descending order
    citations.sort((a, b) => b - a);

    let h = 0;
    while (h < citations.length && citations[h] > h) {
        h++;
    }

    return h;
};
