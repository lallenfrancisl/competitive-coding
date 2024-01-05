/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function rotate(nums, k) {
    const original = [...nums]

    const rotate = k % nums.length
    for (let i = 0; i < nums.length; i += 1) {
        const next = (i + rotate) % nums.length

        nums[next] = original[i]
    }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotateInPlace = function (nums, k) {
    const rotate = k % nums.length
    const splitIndex = nums.length - rotate - 1

    reverse(nums, 0, splitIndex)
    if (splitIndex < nums.length - 1) {
        reverse(nums, splitIndex + 1, nums.length - 1)
    }

    nums.reverse()
}

function reverse(nums, start, end) {
    let lp = start
    let rp = end

    while (lp <= rp) {
        const temp = nums[lp]
        nums[lp] = nums[rp]
        nums[rp] = temp

        lp += 1
        rp -= 1
    }
}
