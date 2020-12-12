/**
 * Merge sort implementation.
 * This implementation uses only an extra auxiliary array and 
 * performs operations inplace using those arrays, rather than making 
 * new subarrays each time.
 * 
 * Time: O(nlog(n))
 * Space: O(n)
 * 
 * @param {Array} array 
 */
function mergeSort(array) {
	// handle edgecase of empty array 
	if(array.length <= 1) {
		return array;
	}
	
	let auxArray = array.slice();
  mergeSortRoutine(array, auxArray, 0, array.length - 1);
	
	return array;
}


/**
 * Recursive merge sort algorithm subroutine. This function contains the
 * logic of merge sort.
 * 
 * @param {Array} array 
 * @param {Array} auxArray 
 * @param {Number} start 
 * @param {Number} end 
 */
function mergeSortRoutine(array, auxArray, start, end) {
	if(start === end) {
		return;
	}
	
	let mid = Math.floor((start + end) / 2);
	
	mergeSortRoutine(auxArray, array, start, mid);
	mergeSortRoutine(auxArray, array, mid + 1, end);
	
	merge(array, auxArray, start, mid, end);
}

/**
 * Merge two arrays
 * @param {Array} mainArray 
 * @param {Array} auxArray 
 * @param {Number} start 
 * @param {Number} mid 
 * @param {Number} end 
 */
function merge(mainArray, auxArray, start, mid, end) {
	let leftSubArrayIndex = start, rightSubArrayIndex = mid + 1,
			mainArrayIndex = start;
	
	while(leftSubArrayIndex <= mid && rightSubArrayIndex <= end) {
		if(auxArray[leftSubArrayIndex] <= auxArray[rightSubArrayIndex]) {
			mainArray[mainArrayIndex] = auxArray[leftSubArrayIndex];
			mainArrayIndex += 1;
			leftSubArrayIndex += 1;
		}
		else {
			mainArray[mainArrayIndex] = auxArray[rightSubArrayIndex];
			mainArrayIndex += 1;
			rightSubArrayIndex += 1;
		}
	}
	
	while(leftSubArrayIndex <= mid) {
		mainArray[mainArrayIndex] = auxArray[leftSubArrayIndex];
		leftSubArrayIndex += 1;
		mainArrayIndex += 1;
	}
	
	while(rightSubArrayIndex <= end) {
		mainArray[mainArrayIndex] = auxArray[rightSubArrayIndex];
		rightSubArrayIndex += 1;
		mainArrayIndex += 1;
	}
}