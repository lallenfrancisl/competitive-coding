/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    const ranges = []

    let end = 0
    let range = ""
    for (let start = 0; start < nums.length; start++) {
        end = start
        range = `${nums[start]}`

        while (end + 1 < nums.length && nums[end] + 1 === nums[end + 1]) {
            end++
        }

        if (end > start) {
            range += `->${nums[end]}`
        }

        ranges.push(range)
        start = end
    }

    return ranges
}
