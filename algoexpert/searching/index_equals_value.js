/**
 * Find the lowest index at which the index equals the value in
 * an array
 */


 /**
  * Find the lowest index at which the index equals the value
  * Time: O(log(n))
  * Space: O(1)
  * 
  * @param {Array} array 
  */
function indexEqualsValue(array) {
  let left = 0,
    right = array.length - 1,
    mid = (left + right) / 2;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
		
    if(array[mid] < mid) {
			left = mid + 1;
		}
		else if (array[mid] === mid && mid === 0) {
      return mid;
    } 
		else if (array[mid] === mid && array[mid - 1] < (mid - 1)) {
      return mid;
    } 
    else {
      right = mid - 1;
    }
  }

  return -1;
}
