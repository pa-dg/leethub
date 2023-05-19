/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0, right = nums.length - 1;
    
    while (left <= right) {
        const midIdx = Math.floor(left + (right - left) / 2);
        const midVal = nums[midIdx];
        
        if (midVal === target) {
            return midIdx;
        } else if (midVal > target) {
            right = midIdx - 1;
        } else {
            left = midIdx + 1;
        }
    };
    
    return -1;
};