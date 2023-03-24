/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const count = {}
    
    for (let n of nums) {
        count[n] = count[n] + 1 || 1;
    }
    
    let sortable = [];
    
    for (var key in count) {
        sortable.push([key, count[key]])
    }
    
    sortable.sort((a, b) => b[1] - a[1])
    console.log(sortable)
    
    let result = [];
    for (let n of sortable) {
        if (result.length !== k) {
            result.push(n[0])
        }
    }

    return result
    
    
};