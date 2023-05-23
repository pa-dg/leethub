/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let [left, right] = [0, nums.length - 1];

  while (left <= right) {
    console.log('left', left)
    console.log('right', right)
    let midIdx = Math.floor(left + (right - left) / 2);
    console.log('mid', midIdx)
    let midVal = nums[midIdx];

    if (midVal === target) {
      return midIdx;
    } else if (nums[left] <= midVal) { // left to mid is non-decreasing
      if (target < midVal && nums[left] <= target) { // target is on left side of mid
        right = midIdx - 1;
      } else { // target is on right side of mid (whether sorted or not!)
        left = midIdx + 1;
      }
    } else { // mid to right is sorted
      if (target > midVal && nums[right] >= target) { // target is on right side of mid
        left = midIdx + 1; 
      } else { // target is on left side of mid
        right = midIdx - 1;
      }
    }         
  }

  return -1;
};