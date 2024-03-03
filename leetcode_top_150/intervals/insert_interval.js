/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  const result = []

  for (let i = 0; i < intervals.length; i++) {
    if (newInterval[1] < intervals[i][0]) {
      result.push(newInterval, ...intervals.slice(i, intervals.length))

      return result
    } else if (newInterval[0] > intervals[i][1]) {
      result.push(intervals[i])
    } else {
      newInterval = [Math.min(newInterval[0], intervals[i][0]), Math.max(newInterval[1], intervals[i][1])]
    }
  }

  result.push(newInterval)

  return result
};

console.log(insert([[1, 3], [6, 9]], [2, 5]));
console.log(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]))
