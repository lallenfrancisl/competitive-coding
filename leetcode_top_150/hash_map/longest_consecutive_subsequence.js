/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    const items = new Set(nums)

    let maxStreak = 0
    for (const item of items.values()) {
        if (items.has(item - 1)) {
            continue
        }

        let streak = 0
        let next = item
        while (true) {
            if (items.has(next)) {
                streak++
                next++
            } else {
                if (streak > maxStreak) {
                    maxStreak = streak
                }
                break
            }
        }
    }

    return maxStreak
}
