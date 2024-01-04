/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
    let p1 = m - 1
    let p2 = n - 1
    let w = nums1.length - 1

    while (p2 >= 0) {
        if (p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[w] = nums1[p1]
            p1 -= 1
        } else {
            nums1[w] = nums2[p2]
            p2 -= 1
        }

        w -= 1
    }

    console.log(nums1)
}

merge([2, 0], 1, [1], 1)
