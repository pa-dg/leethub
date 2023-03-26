/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let charSet = new Set();
    let start = 0;
    let count = 0;
    
    for (let end=0; end<s.length; end++) {
        while (charSet.has(s[end])) {
            charSet.delete(s[start]);
            start++;
        }
        charSet.add(s[end]);
        count = Math.max(count, end-start+1);
    }
    return count;
};


// initialize start pointer, count, charSet
// set while loop if end pointer is in set, then remove s[start] in set to move start pointer by start++
// otherwise, add char in set, check max (end-start+1)