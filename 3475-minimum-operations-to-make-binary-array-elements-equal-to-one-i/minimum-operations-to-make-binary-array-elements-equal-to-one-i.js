/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let operations = 0;

    for (let i = 0; i <= nums.length - 3; i++) {
        if (nums[i] === 0) {
            // Flip nums[i], nums[i+1], nums[i+2]
            nums[i] ^= 1;
            nums[i+1] ^= 1;
            nums[i+2] ^= 1;
            operations++;
        }
    }

    // Check if there are any 0s left in the array (impossible case)
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) return -1;
    }

    return operations;
};
 