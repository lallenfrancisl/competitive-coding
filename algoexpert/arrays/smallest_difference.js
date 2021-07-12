/**
 * Find a pair of numbers from two arrays, num1 from 1st array and num2 from 2nd array,
 * so that the absolute difference between them is closest to zero.
 *
 * SAMPLE:
 *   Input: "arrayOne": [-1, 5, 10, 20, 28, 3], "arrayTwo": [26, 134, 135, 15, 17]
 *   Output: [28, 26]
 */

/**
 * Finds a pair of integers each from the two arrays such that
 * the absolute difference between them is smallest.
 *
 * Time: O(nlog(n)) + O(mlog(m))
 * Space: O(1)
 * @param {number[]} arrayOne
 * @param {number[]} arrayTwo
 * @returns {number[]} pair of numbers that produce smallest difference
 */
const smallestDifference = (arrayOne, arrayTwo) => {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  let absDiff = -Infinity, smallestDiff = Infinity,
    smallestPair = [0, 0], idx1 = 0, idx2 = 0;
  while (idx1 < arrayOne.length && idx2 < arrayTwo.length) {
    absDiff = Math.abs(arrayOne[idx1] - arrayTwo[idx2]);

    if (absDiff === 0) return [arrayOne[idx1], arrayTwo[idx2]];

    if (absDiff < smallestDiff) {
      smallestDiff = absDiff;
      smallestPair = [arrayOne[idx1], arrayTwo[idx2]];
    }

    if (arrayOne[idx1] < arrayTwo[idx2]) {
      idx1 += 1;
    } else {
      idx2 += 1;
    }
  }

  return smallestPair;
}

exports.smallestDifference = smallestDifference;
