/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l = 0, r = nums.length - 1
    
    while (l <= r) {    
        const midIdx = Math.floor(l + (r - l) / 2);
        const mid = nums[midIdx]
        
        if (mid > target) {
            r = midIdx - 1;
        } else if (mid < target) {
            l = midIdx + 1;
        } else {
            return midIdx;
        }
    };
    
    return -1
};