/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let buyPointer = 0
    let sellPointer = 1
    let maxProfit = 0

    while (sellPointer < prices.length) {
        if (prices[buyPointer] > prices[sellPointer]) {
            buyPointer = sellPointer

            continue
        }

        maxProfit = Math.max(
            maxProfit,
            prices[sellPointer] - prices[buyPointer]
        )
        sellPointer += 1
    }

    return maxProfit
}
