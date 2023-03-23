/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const previous = new Set(nums);
    
    return previous.size !== nums.length;
};