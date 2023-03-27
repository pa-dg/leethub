/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let l = 0;
    let r = nums.length - 1;
    
    while (l < r) {
        const m = Math.floor((l + r) / 2)
        
        if (nums[l] < nums[r]) {
            return nums[l];
        } else if (nums[m] >= nums[l]) {
            l = m + 1;
        } else {
            r = m;
        }
    }
    
    return nums[l];
};