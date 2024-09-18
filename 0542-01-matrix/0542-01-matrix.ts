function updateMatrix(mat: number[][]): number[][] {
    // Use BFS approach because we will traverse all neighbors level by level to find shortest distance to zero
    const ROWS = mat.length
    const COLS = mat[0].length
    const result = Array.from({ length: ROWS }, () => Array(COLS).fill(Infinity));
    const queue: [number, number][] = []
    
    // Initialize queue with all 0 and distances
    for (let r=0; r<ROWS; r++) {
        for (let c=0; c<COLS; c++) {
            if (mat[r][c] === 0) {
                result[r][c] = 0
                queue.push([r,c])
            }
        }
    }
    
    // Define directions to move up, down, left, right
    const directions = [
        [-1,0], // up
        [0,1],  // right
        [1,0],  // down
        [0,-1]  // left
    ]
    
    // Do BFS
    while (queue.length > 0) {
        const [r,c] = queue.shift();
        
        for (const [dr, dc] of directions) {
            const newRow = r + dr;
            const newCol = c + dc;
            
            // Check if new pos is in bounds and needs update
            if (newRow >= 0 && newRow < ROWS && newCol >= 0 && newCol < COLS) {
                if (result[newRow][newCol] > result[r][c] + 1) {
                    result[newRow][newCol] = result[r][c] + 1; // this will update distance
                    queue.push([newRow, newCol]) // enqueue to keep going
                }
            }
        }
    }
    
    return result
};