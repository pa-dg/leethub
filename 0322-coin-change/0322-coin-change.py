from collections import defaultdict

class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        
        def _dfs(rem, memo):
            if rem == 0: return 0
            if rem in memo: return memo[rem]
            
            memo[rem] = float("inf")
            
            for coin in coins:
                if rem - coin >= 0:
                    memo[rem] = min(memo[rem], _dfs(rem-coin, memo) + 1)
            
            return memo[rem]
            
        memo = defaultdict(int)
        result = _dfs(amount, memo)
        return result if result != float("inf") else -1 