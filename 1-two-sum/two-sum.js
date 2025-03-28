/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();


    for (let i = 0; i<nums.length;i++){
        let secPair = target - nums[i];
        if(map.has(secPair)){
            return [map.get(secPair),i];
        }
        map.set(nums[i],i);
    }
        return []
};