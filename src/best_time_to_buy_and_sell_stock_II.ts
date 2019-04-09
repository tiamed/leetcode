/**
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit2 = function(prices: number[]): number {
  if (prices.length <= 1) return 0;
  let profit: number = 0;
  for (let i = 1; i < prices.length; i++) {
    profit = Math.max(profit, profit + prices[i] - prices[i - 1]);
  }
  return profit;
};

console.log(maxProfit2([7, 1, 5, 3, 6, 4]));
