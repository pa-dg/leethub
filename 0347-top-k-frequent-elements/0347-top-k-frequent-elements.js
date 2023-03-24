/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let count = {}
    
    for (let n of nums) {
        count[n] = count[n] + 1 || 1;
    }
    
//     let sortable = [];
    
//     for (var key in count) {
//         sortable.push([key, count[key]])
//     }
    
//     sortable.sort((a, b) => b[1] - a[1])
//     console.log(sortable)
    
//     let result = [];
//     for (let n of sortable) {
//         if (result.length !== k) {
//             result.push(n[0])
//         }
//     }

//     return result
    
    let intByFreq = {};
    
    for (let num in count) {
        if (!intByFreq[count[num]]) {
            intByFreq[count[num]] = []
        }
        intByFreq[count[num]].push(num);
    }
    
    // console.log(intByFreq)
    
    let result = [];
    let i = nums.length;
    while (result.length < k) {
        if (intByFreq[i]) {
            result = result.concat(intByFreq[i]);
        }
        i--;
    }
    return result
};
