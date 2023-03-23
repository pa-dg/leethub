/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const previous = new Set();
    
    for (let i=0; i<nums.length; i++) {
        if (previous.has(nums[i])){
            return true;
        }
        previous.add(nums[i])
    }
    
    console.log(previous)
    
    return false;
};