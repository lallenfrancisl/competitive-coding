/**
 * Implement binary search. Return the index of the target in array if found
 * and -1 if not found
 */


 /**
  * Search a sorted array using binary search
  * @param {Array} array 
  * @param {Number} target 
  */
function binarySearch(array, target) {
  let left = 0, right = array.length - 1,
     mid = (left + right) / 2;
 
 while(left <= right) {
   mid = Math.floor((left + right) / 2);
   
   console.log('pos: ', mid);
   
   if(array[mid] === target) {
     return mid;
   }
   else if(array[mid] > target) {
     right = mid - 1;
   }
   else {
     left = mid + 1;
   }
 }
 
 return -1;
}
