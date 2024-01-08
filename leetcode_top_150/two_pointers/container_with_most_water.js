/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let max = 0
    let lp = 0
    let rp = height.length - 1

    let area = 0
    while (lp < rp) {
        area = (rp - lp) * Math.min(height[lp], height[rp])

        if (area > max) {
            max = area

            continue
        }

        if (height[lp] < height[rp]) {
            lp += 1
        } else {
            rp -= 1
        }
    }

    return max
}
