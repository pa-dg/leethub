// in a single pass through array we can find the max profit and keep track of minimum price observed so far

function maxProfit(prices: number[]): number {
    let minPrice = Infinity;
    let maxProfit = 0;
    
    for (let i=0; i<prices.length; i++) {
        const currentPrice = prices[i]
        minPrice = Math.min(minPrice, currentPrice)
        
        const potentialProfit = currentPrice - minPrice
        maxProfit = Math.max(potentialProfit, maxProfit)
    }
    
    return maxProfit
};