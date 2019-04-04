/**
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = function(prices: Array<number>): number {
    let min: number = prices[0];
    let profit = 0;
    for (const price of prices) {
        min = Math.min(price, min);
        profit = Math.max(profit, price - min);
    }
    return profit > 0 ? profit : 0;
};