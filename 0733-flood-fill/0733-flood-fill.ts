function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    // use dfs to explore and traverse the graph
    // keep track of visited image[i][j] using a Set
    // validate bounds and if color matches original starting pixel
    // change pixel to input color
    // declare variable to store modified image to return
    
    let startingColor = image[sr][sc]
    
    if (startingColor === color) return image;
    
    const explore = (row: number, col: number) => {
        const rowInbounds = 0 <= row && row < image.length;
        const colInbounds = 0 <= col && col < image[0].length;
        
        if (!rowInbounds || !colInbounds || image[row][col] !== startingColor)
            return
        
        image[row][col] = color
        
        explore(row + 1, col);
        explore(row - 1, col);
        explore(row, col + 1);
        explore(row, col - 1);
    }
    
    explore(sr, sc)
    return image;
};