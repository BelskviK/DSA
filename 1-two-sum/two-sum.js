/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let indexes=[];    
    for(let i=0; i<nums.length; i++){
        indexes[0]=i
        for(let j=i+1; j<nums.length; j++){
            indexes[1]=j ; 
            if(( nums[indexes[0]] + nums[indexes[1]] ) === target){ 
                break;
            };
        }; 
        if(( nums[indexes[0]] + nums[indexes[1]] ) === target){ 
            break;
        };
    }; 
    return indexes;
};