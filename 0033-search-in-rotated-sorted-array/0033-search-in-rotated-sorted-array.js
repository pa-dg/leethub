/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
//   let [left, right] = [0, nums.length - 1];

//   while (left <= right) {
//     // console.log('left', left)
//     // console.log('right', right)
//     let midIdx = Math.floor(left + (right - left) / 2);
//     // console.log('mid', midIdx)
//     let midVal = nums[midIdx];

//     if (midVal === target) {
//       return midIdx;
//     } else if (nums[left] <= midVal) { // left to mid is non-decreasing
//       if (target < midVal && nums[left] <= target) { // target is on left side of mid
//         right = midIdx - 1;
//       } else { // target is on right side of mid (whether sorted or not!)
//         left = midIdx + 1;
//       }
//     } else { // mid to right is sorted
//       if (target > midVal && nums[right] >= target) { // target is on right side of mid
//         left = midIdx + 1; 
//       } else { // target is on left side of mid
//         right = midIdx - 1;
//       }
//     }         
//   }

//   return -1;
    
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