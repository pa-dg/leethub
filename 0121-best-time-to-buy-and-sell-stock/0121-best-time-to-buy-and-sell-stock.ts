// set a pointer to buy (index) and pointer to sell (index)
// use for loop to iterate through the input prices array and move the pointers buy and sell day
// calculate the profit by subtracting sell and buy, set that as max profit
// return max profit or 0 if no profit

function maxProfit(prices: number[]): number {
    let maxProfit: number = 0
    let buyDay: number = 0
    let sellDay: number = 1

    while (sellDay < prices.length) {
        const profit: number = prices[sellDay] - prices[buyDay]
        maxProfit = Math.max(profit, maxProfit)

        if (prices[sellDay] < prices[buyDay]) {
            buyDay = sellDay
        }
        sellDay++
    }
    
    return maxProfit
};