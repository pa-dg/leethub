/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let [l, r] = [0, nums.length - 1];
    
    while (l <= r) {
        const midIdx = Math.floor(l + (r - l) /2);
        const mid = nums[midIdx];
        
        if (mid === target) {
            return midIdx;
        } else if (nums[l] <= mid) {                        // check if non-decreasing from l to m
            if (target >= nums[l] && target < mid) {        // guarantee target lies on left of mid
                r = midIdx - 1;                             // move r pointer to left of mid  
            }
            else {
                l = midIdx + 1;                             // move l pointer to right of mid
            }
        } else {                                            // mid to right is non-decreasing
            if (target <= nums[r] && target > mid) {        // guarantee target lies on right of mid
                l = midIdx + 1;
            } else {
                r = midIdx - 1;
            }
        }
    }
    
    return -1;
};