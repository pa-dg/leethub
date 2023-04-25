/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let rows = new Set(), cols = new Set(), subBox = new Set()
    
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            if (board[r][c] === ".") continue
            
            if (!rows[r]) {
                rows[r] = new Set()
            }
            
            if (!cols[c]) {
                cols[c] = new Set()
            }
            
            if (!subBox[[Math.floor(r/3), Math.floor(c/3)]]) {
                subBox[[Math.floor(r/3), Math.floor(c/3)]] = new Set()
            }
            
            if (rows[r].has(board[r][c]) || (cols[c].has(board[r][c])) || (subBox[[Math.floor(r/3), Math.floor(c/3)]].has(board[r][c]))) {
                return false                
            }
            
            rows[r].add(board[r][c])
            cols[c].add(board[r][c])
            subBox[[Math.floor(r/3), Math.floor(c/3)]].add(board[r][c])
        }
    }
    
    return true;
};