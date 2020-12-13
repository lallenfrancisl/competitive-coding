/**
 * Find the maximum subset sum in an array. The subset must
 * not contain adjacent elements.
 * 
 */

/**
 * Find maximum subset sum in an array, which does not contain
 * adjacent elements.
 * 
 * Time: O(n)
 * Space: O(n)
 * 
 * @param {Array} array 
 */
function maxSubsetSumNoAdjacent(array) {
	console.log(array);
	if(!array.length) {
		return 0;
	}
	if(array.length === 1) {
		return array[0];
	}
	
	let maxSums = array.slice();
	maxSums[1] = Math.max(array[0], array[1]);
  for(let i = 2; i < array.length; i += 1) {
		maxSums[i] = Math.max(
			maxSums[i - 1],
			maxSums[i -2] + array[i]
		);
	}

	return maxSums[maxSums.length - 1];
}
