class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        max_profit = 0
        left, right = 0, 1      # Buy, Sell
        
        while right < len(prices):
            curr_profit = prices[right] - prices[left]
            max_profit = max(max_profit, curr_profit)

            if prices[left] > prices[right]:
                left = right
            right += 1
            
        return max_profit