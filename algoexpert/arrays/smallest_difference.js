/**
 * Find a pair of numbers from two arrays, num1 from 1st array and num2 from 2nd array,
 * so that the absolute difference between them is closest to zero.
 *
 * SAMPLE:
 *   Input: "arrayOne": [-1, 5, 10, 20, 28, 3], "arrayTwo": [26, 134, 135, 15, 17]
 *   Output: [28, 26]
 */

/**
 * Finds a pair of integers such that the absolute difference
 * between them is smallest.
 *
 * Time: O(nlog(n)) + O(mlog(m))
 * Space: O(1)
 * @param {Array} arrayOne
 * @param {Array} arrayTwo
 */
function smallestDifference(arrayOne, arrayTwo) {
  arrayOne = arrayOne.sort(compare);
  arrayTwo = arrayTwo.sort(compare);

  let num1 = arrayOne[0],
    num2 = arrayTwo[0],
    smallestDiff = Infinity;

  let loopIndex1 = 0,
    loopIndex2 = 0;
  while (loopIndex1 < arrayOne.length && loopIndex2 < arrayTwo.length) {
    let absDiff = Math.abs(arrayOne[loopIndex1] - arrayTwo[loopIndex2]);

    if (absDiff < smallestDiff) {
      num1 = arrayOne[loopIndex1];
      num2 = arrayTwo[loopIndex2];
      smallestDiff = absDiff;
    }

    if (absDiff === 0) {
      break;
    } 
    else if (
      arrayOne[loopIndex1] < arrayTwo[loopIndex2] &&
      loopIndex1 < arrayOne.length - 1
    ) {
      loopIndex1 += 1;
    } 
    else {
      loopIndex2 += 1;
    }
  }

  return [num1, num2];
}

function compare(a, b) {
  return a - b;
}
