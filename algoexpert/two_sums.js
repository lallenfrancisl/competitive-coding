/**
	Check if two numbers in an array sum to a target sum

	Sample Input: 
		array = [3, 5, -4, 8, 11, 1, -1, 6]
		targetSum = 10

	Sample Output: 
		[11, -1] // or [-1, 11]
**/

/**
 * Check if 2 numbers sum to targetSum in an array
 * runtime: O(n) | space: O(n)
 * @param {array} array 
 * @param {number} targetSum 
 */
function twoNumberSum(array, targetSum) {
  let store = {};
	
	let secondNum = null;
	for(const num of array) {
		secondNum = targetSum - num;
		if(secondNum in store) {
			return [num, secondNum];
		}
		else {
			store[num] = true;
		}
	}
	
	return []
}

/**
 * Check if 2 numbers sum to targetSum in an array
 * runtime: O(nlog(n)) | space: O(1)
 * @param {array} array 
 * @param {number} targetSum 
 */
function twoNumberSumOnlogn(array, targetSum) {
	array = array.sort((a, b) => {
		return a - b;
	});
	
	let left = 0, right = array.length - 1, currentSum = 0;
	while(left < right) {
		currentSum = array[left] + array[right];
		if(currentSum === targetSum) {
			return [array[left], array[right]];
		}
		else if(currentSum < targetSum) {
			++left;
		}
		else {
			--right;
		}
	}
	
	return [];
}