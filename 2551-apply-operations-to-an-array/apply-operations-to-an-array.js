/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
    // Clone the array to avoid modifying the original reference
    let sorted = [...nums];

    // First pass: Apply the doubling operation
    for (let i = 0; i < sorted.length - 1; i++) {
        if (sorted[i] === sorted[i + 1]) {
            sorted[i] *= 2;
            sorted[i + 1] = 0;
        }
    }

    // Second pass: Move zeros to the end
    let result = sorted.filter(num => num !== 0);
    let zeroCount = sorted.length - result.length;
    
    // Append the zeros at the end
    while (zeroCount--) {
        result.push(0);
    }

    return result;
};

// Example usage:
console.log(applyOperations([2, 2, 0, 4, 4, 8])); // Output: [4, 4, 8, 8, 0, 0]
