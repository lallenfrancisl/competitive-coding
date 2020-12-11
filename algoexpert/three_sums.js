/**
 * Find three numbers in an array so that it sums to a target sum.
 * Assume the numbers  in the array are all distinct. The output array 
 * must also be distinct.
 * 
 * SAMPLE:
 *  Input: 
 *    "array": [12, 3, 1, 2, -6, 5, -8, 6], "targetSum": 0
 *  Output:
 *    [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]
 *
 * 
 */

 /**
 * (BEST SOLUTION) Generate a list of array of numbers that sum up to targetSum.
 * Time: O(n^2) | Space: O(n)
 * @param {Array} array 
 * @param {Number} targetSum 
 */
function threeNumberSum(array, targetSum) {
  let currentPos = 0,
			left = currentPos + 1,
			right = array.length;
	
	let threeSums = [];
	
	// sort the array in ascending order
	array = array.sort((a, b) => {
		return a - b;
	});
  
	for(let currentPos = 0; currentPos < array.length; ++currentPos) {
		left = currentPos + 1;
    right = array.length - 1;
		while(left < right) {
			let currentSum = array[currentPos] + array[left] + array[right];
			
			if(currentSum === targetSum) {
				threeSums.push([array[currentPos], array[left], array[right]]);
				left += 1;
				right -= 1;
			}
			else if(currentSum > targetSum) {
				right -= 1;
			}
			else {
				left += 1;
			}
		}
	}
	
	return threeSums;
}


/**
 * Generate a list of array of numbers that sum up to targetSum.
 * Time: O(n^2) | Space: O(n)
 * @param {Array} array 
 * @param {Number} targetSum 
 */
function threeNumberSum(array, targetSum) {
	let threeSums = [];
  // sort the array in ascending order
	array = array.sort((a, b) => {
		return a - b;
	});
	
	// loop through each element and find the other elements by 
	// considering it as a two sum problem
	for(let i = 0; i < array.length; ++i) {
		let restOfTheSum = targetSum - array[i];
		
		let rightSums = twoNumberSum(array.slice(i + 1, array.length), restOfTheSum);
    
    // merge both of the arrays
		if(rightSums.length) {
			for(let index = rightSums.length - 1; index >= 0; --index) {
				rightSums[index].unshift(array[i]);
				threeSums.push(rightSums[index]);
			}
		}
	}
	
	return threeSums;
}


/**
 * Check if 2 numbers sum to targetSum in an array
 * runtime: O(nlog(n)) | space: O(1)
 * @param {Array} array 
 * @param {Number} target
 */
function twoNumberSum(array, target) {
	let store = {}, twoSums = [];
	
	for(const num of array) {
		let secondNum = target - num;
		
		if(secondNum in store) {
			twoSums.push([secondNum, num]);
		}
		else {
			store[num] = true;
		}
	}
	
	return twoSums;
}