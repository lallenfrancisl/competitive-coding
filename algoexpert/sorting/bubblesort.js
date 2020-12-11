/**
 * Bubble sort implementation
 * Time:
 *   Best: O(n) | Worst: O(n^2)
 * Space: O(1)
 * 
 * @param {Array} array 
 */
function bubbleSort(array) {
	let isSorted = false;
	
  for(let i = 0; (i < array.length - 1); ++i) {
		isSorted = true;
		
		for(let j = 0; j < array.length - i - 1; ++j) {
			if(array[j] > array[j + 1]) {
				isSorted = false;
				
				let temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}
		}
		
		if(isSorted) {
			break;
		}
	}
	
	return array;
}
