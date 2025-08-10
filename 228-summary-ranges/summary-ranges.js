/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let res = [];
    let i = 0;

    while (i < nums.length) {
        let start = nums[i]; // range start
        // Move forward while numbers are consecutive
        while (i + 1 < nums.length && nums[i + 1] === nums[i] + 1) {
            i++;
        }
        let end = nums[i]; // range end

        // Format depending on whether it's a single number or a range
        if (start === end) {
            res.push(start.toString());
        } else {
            res.push(start + "->" + end);
        }
        i++;
    }

    return res;
};
