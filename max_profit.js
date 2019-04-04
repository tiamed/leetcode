/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    var min = prices[0];
    var profit = 0;
    for (var _i = 0, prices_1 = prices; _i < prices_1.length; _i++) {
        var price = prices_1[_i];
        min = Math.min(price, min);
        profit = Math.max(profit, price - min);
    }
    return profit > 0 ? profit : 0;
};
