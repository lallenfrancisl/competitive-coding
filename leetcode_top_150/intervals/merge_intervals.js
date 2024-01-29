/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a, b) => {
        return a[0] - b[0]
    })

    const result = []

    let start = intervals[0][0]
    let end = intervals[0][1]
    for (let i = 0; i < intervals.length; i++) {
        while (
            i < intervals.length &&
            intervals[i][0] >= start &&
            intervals[i][0] <= end
        ) {
            end = Math.max(intervals[i][1], end)
            i++
        }

        result.push([start, end])

        if (i < intervals.length) {
            start = intervals[i][0]
            end = intervals[i][1]
            i--
        }
    }

    return result
}
