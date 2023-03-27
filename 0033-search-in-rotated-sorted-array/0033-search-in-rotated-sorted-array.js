/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    
    while (l <= r) {
        const m = Math.floor((l + r) / 2);
        if (nums[m] === target) {
            return m;
        }
        
        if (nums[m] >= nums[l]) {
            if (nums[l] <= target && nums[m] > target) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        } else {
            if (nums[r] >= target && nums[m] < target) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }
    }
    
    return -1;
};