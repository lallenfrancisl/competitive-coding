/**
 * Selection sort implementation
 * Time: O(n^2)
 * Space: O(1)
 * @param {Array} array 
 */
function selectionSort(array) {
  for(let i = 0; i < array.length - 1; ++i) {
		let minIndex = i;
		for(let j = i + 1; j < array.length; ++j) {
			if(array[j] < array[minIndex]) {
				minIndex = j;
			}
		}
		// swap the minimum value
		let temp = array[i];
		array[i] = array[minIndex];
		array[minIndex] = temp;
	}
	
	return array;
}