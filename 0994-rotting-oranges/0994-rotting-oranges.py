from collections import deque

class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        ROWS, COLS = len(grid), len(grid[0])
        
        fresh, minutes = 0, 0
        rotten = deque()
        
        for r in range(ROWS):
            for c in range(COLS):
                if grid[r][c] == 2:
                    rotten.append([r, c])
                elif grid[r][c] == 1:
                    fresh += 1
                    
        # print('rotten', rotten)
        # print('fresh', fresh)
        
        directions = ((0,1), (0,-1), (1,0), (-1,0))
        visited = set()
        
        def _isInbounds(r, c):
            rowInbounds = 0 <= r < ROWS
            colInbounds = 0 <= c < COLS
            return rowInbounds and colInbounds
        
        while rotten and fresh > 0:
            for single in range(len(rotten)):
                r, c = rotten.popleft()
                print('pos', r, c)

                for dir in directions:
                    neighborRow = r + dir[0]
                    neighborCol = c + dir[1]
                    neighborPos = neighborRow, neighborCol

                    #if inbounds and fresh, make rotten
                    if _isInbounds(neighborRow, neighborCol) and grid[neighborRow][neighborCol] == 1:
                        grid[neighborRow][neighborCol] = 2
                        rotten.append([neighborRow, neighborCol])
                        print('rotten', rotten)
                        fresh -= 1
                        print('fresh', fresh)

            minutes += 1
            print('mins', minutes)  
                    
        return minutes if fresh == 0 else -1
                
   
        
        
        
        
       