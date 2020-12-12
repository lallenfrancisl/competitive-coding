/**
 * Move every instance of a given integer in an array to the
 * end of the array
 * 
 * SAMPLE:
 *   Input: "array": [2, 1, 2, 2, 2, 3, 4, 2], "toMove": 2
 *   Output: [4, 1, 3, 2, 2, 2, 2, 2] 
 */

/**
 * Move every instance of toMove to the end of the array
 * 
 * Time: O(n)
 * Space: O(1)
 * 
 * @param {Array} array 
 * @param {Number} toMove 
 */
function moveElementToEnd(array, toMove) {
  let scanIndex = 0, swapIndex = array.length - 1;
	
	while(scanIndex < swapIndex) {
		if(array[scanIndex] === toMove) {
			// decrement swapIndex till it is not pointing to
			// a cell containing toMove
			while(scanIndex < swapIndex && array[swapIndex] === toMove) {
				swapIndex -= 1;
			}
			
			// swap toMove with other numbers 
			let temp = array[swapIndex];
			array[swapIndex] = array[scanIndex];
			array[scanIndex] = temp;
		}
		
		scanIndex += 1;
	}
	
	return array;
}