/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // if (new Set(nums).size == nums.length){
    //     return false;
    // } else {
    //     return true;
    // }
    const previous = new Set(nums);
    
    return previous.size !== nums.length;
};