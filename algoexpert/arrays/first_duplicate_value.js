/**
 * given an array of integers between 1 to n, n inclusive,
 * n is the length of the array. Return the first integer that appears
 * more than once when the array is read from left to right.
 * 
 * SAMPLE:
 *   Input: [2, 1, 5, 2, 3, 3, 4]
 *   Output: 2
 */

/**
 * Find the first integer which is repeated first
 * 
 * Time: O(n)
 * Space: O(n)
 * 
 * @param {Array} array 
 */
function firstDuplicateValue(array) {
  let store = {};
	
	for(const val of array) {
		if(store[val]) {
			return val;
		}
		else {
			store[val] = true;
		}
	}
	
  return -1;
}

/**
 * Find the first integer which is repeated first
 * 
 * Time: O(n)
 * Space: O(1)
 * 
 * @param {Array} array 
 */
function firstDuplicateValue(array) {
  for(const val of array) {
    let absVal = Math.abs(val);
    if(array[absVal - 1] < 0) {
      return absVal;
    }
    array[absVal - 1] *= -1;
  }

  return -1;
}