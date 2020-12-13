/**
 * Find if a given array is monotonic in nature. Monotonic 
 * means that the elements of an array is either continuosly 
 * non-decreasing or non-increasing from left to right. Monotonic 
 * does not mean elements have to be decreasing or increasing continuosly.
 * Elements can also be equal.
 */

 /**
  * Check if an array is monotonic
  * 
  * Time: O(n)
  * Space: O(1)
  * 
  * @param {Array} array 
  */
function isMonotonic(array) {
	let prev = array[0];
	let checkForIncrease = false;
	
	if(array.length <= 2) {
		return true;
	}
	
	if(array[0] > array[array.length - 1]) {
		checkForIncrease = true;
	}
	
  if(checkForIncrease) {
		for(const num of array) {
			if(num > prev) {
				return false;
			}
			
			prev = num;
		}
	}
	else {
		for(const num of array) {
			if(num < prev) {
				return false;
			}
			
			prev = num;
		}
	}
	
	return true;
}