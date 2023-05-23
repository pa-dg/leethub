/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let [left, right] = [0, nums.length - 1];
    const sortedSqrs = [];
    
    while (left <= right) {
        let leftSqr = Math.pow(nums[left], 2);
        let rightSqr = Math.pow(nums[right], 2);
        
        if (leftSqr > rightSqr) {
            sortedSqrs.push(leftSqr);
            left++;
        } else {
            sortedSqrs.push(rightSqr);
            right--;
        }
    };
    
    return sortedSqrs.reverse();
};