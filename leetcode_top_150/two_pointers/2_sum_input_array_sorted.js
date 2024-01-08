/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let lp = 0
    let rp = numbers.length - 1

    let sum = 0
    while (lp < rp) {
        sum = numbers[lp] + numbers[rp]

        if (sum === target) {
            return [lp + 1, rp + 1]
        }

        if (sum > target) {
            rp -= 1

            continue
        }

        if (sum < target) {
            lp += 1

            continue
        }
    }

    return []
}
