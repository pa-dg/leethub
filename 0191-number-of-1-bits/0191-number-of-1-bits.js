/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let countOne = 0;
    let intStr = n.toString(2)
    
    for (let i=0; i<intStr.length; i++) {
        if (intStr[i] === "1") {
            countOne++;
        }
    }
    return countOne;
};