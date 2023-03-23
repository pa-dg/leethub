/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let chars = {};
    
    for (let char of s) {
        chars[char] = chars[char] + 1 || 1;
    }
    
    for (let char of t) {
        if (char in chars) {
            chars[char] --;
        } else {
            return false;
        }
    }

    for (let val of Object.values(chars)) {
        if (val !== 0) {
            return false;
        }
    }

    return true;
};