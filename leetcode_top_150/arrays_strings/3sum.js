/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b)
    const results = []

    for (let i = 0; i < nums.length - 2; i += 1) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue
        }

        let mp = i + 1
        let rp = nums.length - 1

        while (mp < rp) {
            const sum = nums[i] + nums[mp] + nums[rp]

            if (sum === 0) {
                results.push([nums[i], nums[mp], nums[rp]])

                while (mp < rp && nums[mp] === nums[mp + 1]) {
                    mp += 1
                }

                while (rp > mp && nums[rp] === nums[rp - 1]) {
                    rp -= 1
                }

                mp += 1
                rp -= 1
            } else if (sum > 0) {
                rp -= 1
            } else {
                mp += 1
            }
        }
    }

    return results
}
