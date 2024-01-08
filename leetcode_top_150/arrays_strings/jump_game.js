/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let reachable = 0

    for (let i = 0; i < nums.length; i += 1) {
        if (i > reachable) {
            return false
        }

        reachable = Math.max(reachable, i + nums[i])
    }

    return true
}
