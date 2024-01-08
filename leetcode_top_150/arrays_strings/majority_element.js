/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    /**
        Moore voting algorithm
     */
    let count = 0
    let candidate = 0

    for (let i = 0; i < nums.length; i += 1) {
        if (count === 0) {
            candidate = nums[i]
        }

        if (nums[i] === candidate) {
            count += 1
        } else {
            count -= 1
        }
    }

    return candidate
}
