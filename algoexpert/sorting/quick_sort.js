/**
 * Quicksort implementation
 * Time: 
 *   Best: O(nlog(n))
 *   Average: O(nlog(n))
 *   Worst: O(n^2)
 * Space:
 *   Best: O(log(n))
 *   Average: O(log(n))
 *   Worst: O(log(n))
 * @param {Array} array 
 */
function quickSort(array) {
  quickSortRoutine(array, 0, array.length - 1);
	
	return array;
}


/**
 * quicksort sorting routine
 * @param {Array} array 
 * @param {Number} startIndex 
 * @param {Number} endIndex 
 */
function quickSortRoutine(array, startIndex, endIndex) {
	// handle edge case of invalid array 
	if(startIndex >= endIndex) {
		return;
	}
	
	let pivot = startIndex, left = pivot + 1, right = endIndex;
	
	while(left <= right) {
		if(array[left] > array[pivot] && array[right] < array[pivot]) {
			swap(left, right, array);
		}
		if(array[left] <= array[pivot]) {
			left += 1;
		}
		if(array[right] >= array[pivot]) {
			right -= 1;
		}
	}

	swap(pivot, right, array);
	
	let isRightSubArrayLarge = (endIndex - right - 1) > (right - 1 - startIndex);
	if(isRightSubArrayLarge) {
		quickSortRoutine(array, startIndex, right - 1);
		quickSortRoutine(array, right + 1, endIndex);
	}
	else {
		quickSortRoutine(array, startIndex, right - 1);
		quickSortRoutine(array, right + 1, endIndex);
	}
}

function swap(first, second, array) {
	let temp = array[first];
	array[first] = array[second];
	array[second] = temp;
}
