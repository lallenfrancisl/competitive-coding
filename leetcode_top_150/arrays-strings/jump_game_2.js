/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let counter = 0
    let lp = 0
    let rp = 0

    while (rp < nums.length - 1) {
        let farthest = 0

        for (let i = lp; i < rp + 1; i += 1) {
            farthest = Math.max(farthest, i + nums[i])
        }

        lp = rp + 1
        rp = farthest
        counter += 1
    }

    return counter
}
