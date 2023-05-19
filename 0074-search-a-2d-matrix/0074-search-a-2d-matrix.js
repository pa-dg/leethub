/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let [ROWS, COLS] = [matrix.length, matrix[0].length];
    let [top, bottom] = [0, ROWS - 1];
    
    while (top <= bottom) {
        let row = Math.floor(top + (bottom - top) / 2);
        
        if (target < matrix[row][0]) {
            bottom = row - 1;
        } else if (target > matrix[row][COLS - 1]) {
            top = row + 1;
        } else {
            break;
        }
    };
    
    if (!(top <= bottom)) return false;
    
    let row = Math.floor(top + (bottom - top) / 2);
    let [left, right] = [0, COLS - 1];
    
    while (left <= right) {
        let midIdx = Math.floor(left + (right - left) / 2);
        const guess = matrix[row][midIdx];
        
        if (target > guess) {
            left = midIdx + 1;
        } else if (target < guess) {
            right = midIdx - 1;
        } else if (target === guess) {
            return true;
        }
    }
    
    return false;
};