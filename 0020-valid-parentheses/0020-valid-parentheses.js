/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    charMap = { ')': '(', '}':'{', ']': '[' }
    
    for (let c of s) {
        if (c in charMap) {
            let curr = stack.pop();
            if (curr !== charMap[c])
                return false;
        } else {
            stack.push(c);
        }
    }

    return (stack.length === 0 ? true : false);
};