/**
 * Given an array of numbers find a list of unique quadruplets such that
 * each of the quadruplets sum up to a target sum. 
 * 
 * SAMPLE:
 *   Input: "array": [7, 6, 4, -1, 1, 2], "targetSum": 16
 *   Output: [[7, 6, 4, -1], [7, 6, 1, 2]]
 */

/**
 * Return a list of quadruplets that sum to targetSum from an array
 * of numbers
 * 
 * Time: 
 *   Average: O(n^2)
 *   Worst: O(n^3)
 * Space: O(n^2)
 * @param {Array} array 
 * @param {Number} targetSum 
 */
function fourNumberSum(array, targetSum) {
	let store = {}, results = [];
	
  for(let i = 0; i < array.length; i += 1) {
		for(let j = i + 1; j < array.length; j += 1) {
			let tempSum = array[i] + array[j];
			
			let diff = targetSum - tempSum;
			if(diff in store) {
				for(const pair of store[diff]) {
					results.push([...pair, array[i], array[j]]);
				}
			}
		}
		
		for(let k = 0; k < i; k += 1) {
			let tempSum = array[k] + array[i];
			
			if(!(tempSum in store)) {
				store[tempSum] = [];
			}
			
			store[tempSum].push([array[k], array[i]]);
		}
	}
	
	return results;
}