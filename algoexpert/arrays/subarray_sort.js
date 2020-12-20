/**
 * Find the starting and ending indices subarray that needs to be sorted 
 * in an array so that the whole array is sorted.
 * 
 * SAMPLE:
 *   Input: [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]
 *   Output: [3, 9]
 */

/**
 * Find the starting and ending indices subarray that needs to be sorted 
 * in an array so that the whole array is sorted.
 * 
 * Time: O(n)
 * Space: O(1)
 * 
 * @param {Array} array 
 */
function subarraySort(array) {	
	// find the positions in the current state of the array where
	// ascending order breaks apart and is restabished
	let unsortedStart = Infinity, unsortedEnd = -Infinity;
	for(let i = 1; i < array.length; i += 1) {
		if(array[i - 1] > array[i]) {
			unsortedStart = Math.min(unsortedStart, array[i - 1], array[i]);
			unsortedEnd = Math.max(unsortedEnd, array[i - 1], array[i]);
		}
	}
	
	if(unsortedStart == Infinity) {
		return [-1, -1];
	}
	
	let unsortedIndices = [0, array.length - 1];
  
  // find where to insert the lowest unsorted value
	while(unsortedStart >= array[unsortedIndices[0]]) {
		unsortedIndices[0] += 1;
	}
  
  // find where to insert the highest unsorted value
	while(unsortedEnd <= array[unsortedIndices[1]]) {
		unsortedIndices[1] -= 1;
	}

	return unsortedIndices;
}