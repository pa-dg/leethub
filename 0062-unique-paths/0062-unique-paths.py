class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        memo = {}
        
        def traverse(m, n):
            if m == 0 or n == 0:
                return 0
            if m == 1 or n == 1:
                return 1
            
            key = f'{m}, {n}'
            if key in memo:
                return memo[key]
            
            memo[key] = traverse(m-1, n) + traverse(m, n-1)
            return memo[key]
        
        return traverse(m, n)