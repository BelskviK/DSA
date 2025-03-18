/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function(nums) {
    let ars = []; // Change Map to array

    for (let i = 0; i < nums.length - 1; i++) { 
        ars.push([nums[i], nums[i + 1]]);
    }

    // LOGIC WHERE WE HANDLE ARRAY OF ars [[4, 2], [2, 4]]
    let yesIs = function() {
        let sums = [];

        for (let i = 0; i < ars.length; i++) {  
            sums.push(ars[i][0] + ars[i][1]); // Correct sum calculation
        }
        
        // SUMS [6, 6]
        const seen = new Set(); // Use Set instead of Object

        for (let num of sums) {
            if (seen.has(num)) {
                return true;
            }
            seen.add(num);
        } 
        return false;
    };

    return yesIs(); // Call the function instead of checking if it's defined
};

 