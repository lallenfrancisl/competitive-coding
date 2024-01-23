/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let lp = 0
    let sum = 0
    let window = Infinity

    for (let rp = 0; rp < nums.length; rp++) {
        sum += nums[rp]

        while (sum >= target) {
            window = Math.min(rp - lp + 1, window)
            sum -= nums[lp]
            lp++
        }
    }

    return window === Infinity ? 0 : window
}
