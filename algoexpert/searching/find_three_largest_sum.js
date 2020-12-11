/**
 * Find the three largest numbers in an array without sorting the
 * array. The output array must be sorted in ascending order.
 * 
 * SAMPLE:
 *   Input:
 *     [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]
 *   Output:
 *     [18, 141, 541]
 */


/**
 * Find the three largest numbers in an array
 * Time: O(n)
 * Space: O(1)
 * @param {Array} array 
 */
function findThreeLargestNumbers(array) {
  let threeLargest = [-Infinity, -Infinity, -Infinity];

  for (const num of array) {
    updateArray(threeLargest, num);
  }

  return threeLargest;
}


/**
 * update the array with a number if it is larger than existing numbers 
 * @param {Array} threeLargest 
 * @param {Number} num 
 */
function updateArray(threeLargest, num) {
  if (num > threeLargest[2]) {
    shiftArray(threeLargest, num, 2);
  } 
  else if (num > threeLargest[1]) {
    shiftArray(threeLargest, num, 1);
  } 
  else if (num > threeLargest[0]) {
    shiftArray(threeLargest, num, 0);
  } 
  else {}
}


/**
 * insert number in the array and insert the new number
 * @param {Array} threeLargest 
 * @param {Number} num 
 * @param {Number} insertPos 
 */
function shiftArray(threeLargest, num, insertPos) {
  for (let i = 0; i <= insertPos - 1; ++i) {
    threeLargest[i] = threeLargest[i + 1];
  }

  threeLargest[insertPos] = num;
}