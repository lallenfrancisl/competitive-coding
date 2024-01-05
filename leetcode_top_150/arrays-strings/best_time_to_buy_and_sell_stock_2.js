/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let profit = 0

    for (let sp = 1; sp < prices.length; sp += 1) {
        const curr = prices[sp] - prices[sp - 1]

        if (curr > 0) {
            profit += curr
        }
    }

    return profit
}
