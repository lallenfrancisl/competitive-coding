/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    const exists = new Map()

    let num = 0
    for (let i = 0; i < nums.length; i++) {
        num = nums[i]
        if (exists.has(num) && Math.abs(exists.get(num) - i) <= k) {
            return true
        }

        exists.set(num, i)
    }

    return false
}
