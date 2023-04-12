/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let left = 0, right = nums.length - 1
    
    while (left < right) {
        let mid = Math.floor(left + (right - left) / 2)
        
        if (nums[mid] < nums[mid + 1]) {
            left = mid + 1
        } else {
            right = mid
        }
    }
    
    return left
};