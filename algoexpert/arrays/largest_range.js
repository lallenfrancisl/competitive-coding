/**
 * Given an array return the largest range of integers in the array.
 * A range is defined as a list of numbers on the real integer number line.
 * That is every integer after it will be present, [1, 2, 3, 4] is a range.
 * 
 * SAMPLE:
 *   Input: [1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6]
 *   Output: [0, 7]
 */

/**
 * Find the largest range in a given array of integers. The array can be sorted or
 * unsorted.
 * @param {Array} array 
 */
function largestRange(array) {
	let store = {}, largestRange = [], largestLength = 0;
	
	// build a dictionary of the numbers in the array 
	for(const num of array) {
		store[num] = true;
	}
	
	// for each element in the array check if a range is possible
	for(const num of array) {
		// only check for the possibility of a range if the current num 
		// was not previously checked for a range
		if(store[num]) {
			store[num] = false;
			let currLength = 1;
			let left = num - 1,
					right = num + 1;
			
			// check to the left side of the number for range continuation
			while(left in store) {
				store[num] = false;
				left -= 1;
				currLength += 1;
			}
			
			// check to the right side of the number for range continuation 
			while(right in store) {
				store[num] = false;
				currLength += 1;
				right += 1;
			}
			
			if(currLength > largestLength) {
				largestLength = currLength;
				largestRange = [left + 1, right - 1];
			}
		}
	}
	
	console.log(largestRange);
	return largestRange;
}