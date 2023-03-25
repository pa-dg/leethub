/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let l = 0;                      //buy
    let r = 1                       //sell
    let maxProfit = 0;
    
    while (l < r && r < prices.length) {
        const currProfit = prices[r] - prices[l];
        maxProfit = Math.max(maxProfit, currProfit);
        
        if (prices[l] > prices[r]) {
            l = r;
        }
        r += 1;
    }
    
    return maxProfit;
};

// l, r pointer, buy, sell, respectively
// calculate currProfit = prices[sell] - prices[buy]
// if r > l, move l and r