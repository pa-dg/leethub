/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let longest = 0, numSet = new Set(nums)
    
    for (let n of nums) {
        if (!numSet.has(n-1)) {
            let length = 0;
            
            while (numSet.has(n+length)) {
                length++;
            }
            longest = Math.max(longest, length)
        }
    }
    return longest
};