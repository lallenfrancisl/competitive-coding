/**
  Given a two dimensional array, output the elements in a zig-zag order.

  SAMPLE:
    Input:
      [
        [1, 3, 4, 10], 
        [2, 5, 9, 11], 
        [6, 8, 12, 15], 
        [7, 13, 14, 16]
      ]
    Output:
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
*/

/**
 * Output a given two dimensional array in a zig-zag order
 * 
 * Time: O(n)
 * Space: O(n)
 * 
 * @param {Array} array 
 */
function zigzagTraverse(array) {
  let row = 0, col = 0, result = [];
	let downward = true;
	let height = array.length - 1, width = array[0].length - 1;
	
	while(row <= height && col <= width) {
		result.push(array[row][col]);
		
		if(downward) {
			if(col === 0 || row === height) {
				downward = false;
				
				if(row === height) {
					col += 1;
				}
				else {
					row += 1;
				}
			}
			else {
				row += 1;
				col -= 1;
			}
		}
		else {
			if(row === 0 || col === width) {
				downward = true;
				
				if(col === width) {
					row += 1;
				}
				else {
					col += 1;
				}
			}
			else {
				row -= 1;
				col += 1;
			}
		}
	}
	
	console.log(result);
	return result;
}
