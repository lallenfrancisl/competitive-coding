/**
 * write a function that takes a sorted array as an input and returns
 * a sorted array of squares of the input array.
 *
 * Sample Input: [-10, -5, 0, 5, 10]
 * Sample Output: [0, 25, 25, 100, 100]
*/

/**
 * returns a sorted array of squares from the input array
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} sortedArray
 * @returns {number[]} squaredArray
*/
function sortedSquaredArray(sortedArray) {
	// keep track of the largest and smallest absolute value
	let smallest = 0, largest = sortedArray.length - 1;
	let squaredArray = sortedArray.slice();

	let pointer = sortedArray.length - 1;
	while (smallest <= largest) {
		const absSmallest = Math.abs(sortedArray[smallest]), 
			absLargest = Math.abs(sortedArray[largest]);

		if (absLargest > absSmallest) {
			squaredArray[pointer] = absLargest * absLargest;
			largest -= 1;
		} else {
			squaredArray[pointer] = absSmallest * absSmallest;
			smallest += 1;
		}

		pointer -= 1;
	}

	return squaredArray;
}

// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;
