/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    anagrams = {}
    
    for (let ele of strs) {
        sorted = (ele.split('')).sort()
        if (!anagrams[sorted]) {
            anagrams[sorted] = []
        }
        anagrams[sorted].push(ele)
    }
    
    return Object.values(anagrams)
};


// create hashtable, key:pair => "aet":[]
// iterate thru strs, sort the ele and add to hashtable
// return values of hashtable