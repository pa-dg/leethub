// 1. declare and initialize hash table, to store the count frequency of each number in input array nums
// 2. Group numbers by their frequency in a hash

function topKFrequent(nums: number[], k: number): number[] {
    const hashCount: { [key: number]: number } = {} 

    for (let n of nums) {
        hashCount[n] = hashCount[n] + 1 || 1;
    }

    let intByFreq: { [key: number]: number[] } = {} 
        for (let num in hashCount) {
            if (intByFreq[hashCount[num]] === undefined) {
                intByFreq[hashCount[num]] = []
            }
            intByFreq[hashCount[num]].push(parseInt(num)) // parse num to ensure its number
        }

    let result: number[] = [];
    let i: number = nums.length
    
    while (result.length < k) {
        if (intByFreq[i] !== undefined) {
            result = result.concat(intByFreq[i]);
        }
        i--;
    }
    console.log(result)
    return result;
};