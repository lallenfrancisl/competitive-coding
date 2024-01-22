/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[] | null}
 */
var twoSum = function (nums, target) {
    const exists = new Map()

    for (let i = 0; i < nums.length; i++) {
        const need = target - nums[i]

        if (exists.has(need)) {
            return [exists.get(need), i]
        }

        exists.set(nums[i], i)
    }

    return null
}
