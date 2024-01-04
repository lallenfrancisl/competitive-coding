/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    const dupes = {}

    let index = 0
    for (let i = 0; i < nums.length; i += 1) {
        if (!dupes[nums[i]]) {
            nums[index] = nums[i]
            index += 1
        }

        dupes[nums[i]] = true
    }

    return index
}
