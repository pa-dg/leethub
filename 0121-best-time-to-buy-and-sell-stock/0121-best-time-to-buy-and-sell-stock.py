class Solution(object):
    def maxProfit(self, prices):
        left = 0        #Buy                                        #left=1
        right = 1       #Sell                                       #right=3
        max_profit = 0                                              #profit=4
        
        while right < len(prices):                                  #3 < 6
            profit = prices[right] - prices[left]                   #profit = 3-1=-1
            if prices[left] < prices[right]:
                max_profit = max(max_profit, profit)
            else:
                left = right                                        #left = 1
            right += 1
            
        return max_profit
        
        """
        :type prices: List[int]
        :rtype: int
        """
        