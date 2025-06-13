/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const seen = new Set();

    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        n = sumOfSquares(n);
    }

    return n === 1;
};

function sumOfSquares(num) {
    return num
        .toString()
        .split('')
        .map(d => parseInt(d))
        .reduce((sum, d) => sum + d * d, 0);
}
