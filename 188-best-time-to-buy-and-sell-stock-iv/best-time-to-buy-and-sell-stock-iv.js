/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    let n = prices.length;
    if (n === 0) return 0;

    // Unlimited transactions
    if (k >= n / 2) {
        let profit = 0;
        for (let i = 1; i < n; i++) {
            if (prices[i] > prices[i - 1]) {
                profit += prices[i] - prices[i - 1];
            }
        }
        return profit;
    }

    let prev = Array(n).fill(0);
    let curr = Array(n).fill(0);

    for (let i = 1; i <= k; i++) {
        let maxDiff = -prices[0];
        for (let j = 1; j < n; j++) {
            curr[j] = Math.max(curr[j - 1], prices[j] + maxDiff);
            maxDiff = Math.max(maxDiff, prev[j] - prices[j]);
        }
        [prev, curr] = [curr, prev]; // swap
    }

    return prev[n - 1];
};
