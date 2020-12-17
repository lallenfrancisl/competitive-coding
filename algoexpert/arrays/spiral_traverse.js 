/**
 * Print the values of a two dimensional array in a clockwise spiral fashion.
 * 
 * SAMPLE:
 *   Input: "array": [[1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]]
 * 	 
 *   Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
 */

/**
 * Build a one-dimensional array from a two dimensional array
 * with values in a spiral order.
 * 
 * Time: O(n)
 * Space: O(n) It is O(n) because the output array must be constructed and kept
 *        in memory.
 *   
 * @param {Array} array two dimensional array
 */
function spiralTraverse(array) {
  let endRow = array.length - 1,
			endCol = array[0].length - 1,
			startCol = 0, startRow = 0;
	
	let result = [];
	
	while(startCol <= endCol && startRow <= endRow) {
		// push the top row 
		for(let i = startCol; i <= endCol; i += 1) {
			result.push(array[startRow][i]);
		}

		// push the right column 
		for(let i = startRow + 1; i <= endRow; i += 1) {
			result.push(array[i][endCol]);
		}

		// push bottom row
		for(let i = endCol - 1; i >= startCol; i -= 1) {
			// this is given to prevent printing the values
			// two times when the height of the innermost 
			// perimeter is 1
			if(startRow === endRow) break;
			
			result.push(array[endRow][i]);
		}

		// push the left column
		for(let i = endRow - 1; i >= startRow + 1; i -= 1) {
			// prevent printing values two times when width of 
			// of the innermost perimeter is 1
			if(startCol === endCol) break;
			result.push(array[i][startCol]);
		}
		
		endCol -= 1;
		endRow -= 1;
		startRow += 1;
		startCol += 1;
	}
	
	return result;
}