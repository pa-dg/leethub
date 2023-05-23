/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let [left, right] = [1, num];
    
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        
        if (Math.pow(mid, 2) === num) {
            return true;
        } else if (Math.pow(mid, 2) > num) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return false;
};