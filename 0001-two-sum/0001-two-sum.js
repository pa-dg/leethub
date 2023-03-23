/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    numsObj = {}
    
    for (let i in nums) {
        let complement = target - nums[i]
        
        if (complement in numsObj) {
            return [i, numsObj[complement]]
        }
        numsObj[nums[i]] = i;
    }
};