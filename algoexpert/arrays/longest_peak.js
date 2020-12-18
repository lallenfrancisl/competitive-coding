/**
 * Find the logest peak in a given array. A peak is defined as an subsequence of
 * an array in which there is an element in the array and the elements to both the
 * sides is strictly decreasing. [0, 1, 2, 3, 6, 5, 4, 3, 2] is a peak subsequence 
 * with the peak at 6. Note that the left and right sides must be strictly decreasing.
 */

/**
 * Find the longest peak in the array
 * 
 * Time: O(n)
 * Space: O(1)
 * 
 * @param {Array} array 
 */
function longestPeak(array) {
	let peakLength = 0;
	
	for(let i = 1; i < array.length - 1; i += 1) {
		// check if this is a peak
		if(
			array[i - 1] < array[i] && 
			array[i + 1] < array[i]
		) {
			let potentialPeakLength = 1;
			// count to left side of the peak
			for(
				let j = i - 1; 
				array[j] < array[j + 1] && j >= 0; 
				j -= 1
			) {
				potentialPeakLength += 1;
			}
			// count to the right side of the peak 
			for(
				let j = i + 1; 
				array[j] < array[j - 1] && j <= array.length - 1; 
				j += 1
			) {
				potentialPeakLength += 1;
			}
			
			if(potentialPeakLength > peakLength) {
				peakLength = potentialPeakLength;
			}
		}
  }
  
	return peakLength;
}