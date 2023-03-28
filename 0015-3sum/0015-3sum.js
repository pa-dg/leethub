/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let result = [];
    nums.sort((a,b) => a - b )
    
    for (let i = 0; i<nums.length; i++) {
        if (i > 0 && nums[i-1] === nums[i]) continue;
        
        let j = i + 1
        let k = nums.length - 1
        
        while (j < k) {
            let currSum = nums[i] + nums[j] + nums[k];
            
            if (currSum > 0) {
                k -= 1
            } else if (currSum < 0) {
                j += 1;
            } else {
                result.push([nums[i], nums[j], nums[k]])
                j += 1;
                while (nums[j] === nums[j-1] && j < k) j++;
            }
        }
    }
    return result;
};