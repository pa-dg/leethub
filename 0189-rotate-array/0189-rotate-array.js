/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let result = [...nums]                                         
    
    result.map((n, idx) => {                                          
        nums[(idx + k) % nums.length] = n         
    })
    
};