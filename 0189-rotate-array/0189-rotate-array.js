/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
//     let result = [...nums]                                         
    
//     result.map((n, idx) => {                                          
//         nums[(idx + k) % nums.length] = n         
//     })
    
    k %= nums.length;
    
    let reverse = function(i, j) {
        while (i < j) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
            i++;
            j--;
        }
    }
    
    reverse(0, nums.length - 1);
    reverse(0, k-1);
    reverse(k, nums.length - 1)
};