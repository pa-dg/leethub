/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    const s1Len = s1.length, s2Len = s2.length;
    
    if (s1Len > s2Len) return false;
    
    const count = Array(26).fill(0);
    for (let i = 0; i < s1Len; i++) {
        count[s1.charCodeAt(i) - "a".charCodeAt(0)]++;
        count[s2.charCodeAt(i) - "a".charCodeAt(0)]--;
    }
    
    if (count.every(n => n === 0)) return true;
    
    for (let i = s1Len; i < s2Len; i++) {
        count[s2.charCodeAt(i) - "a".charCodeAt(0)]--;
        count[s2.charCodeAt(i - s1Len) - "a".charCodeAt(0)]++;
        
        if (count.every(n => n === 0)) return true;
    }
    
    return false;
};