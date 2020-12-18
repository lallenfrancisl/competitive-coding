/**
 * Construct an array of products from a given array. Each element in an array
 * is such that it is the product of every other element in the array.
 * 
 * SAMPLE:
 *   Input: [5, 1, 4, 2]
 *   Output: [8, 40, 10, 20]
 */

/**
 * Construct an array with the products of other elements in 
 * the array excluding the element
 * 
 * Time: O(n)
 * Space: O(n)
 * 
 * @param {Array} array 
 */
function arrayOfProducts(array) {
  let productsFromStart = [1], productsFromEnd = [1],
			runningProdStart = 1, runningProdEnd = 1;
	
	for(let i = 1; i < array.length; i += 1) {
		runningProdStart *= array[i - 1];
		productsFromStart.push(runningProdStart);
		
		runningProdEnd *= array[array.length - i];
		productsFromEnd.unshift(runningProdEnd);
	}
	
	let result = [];
	for(let i = 0; i < array.length; i += 1) {
		result.push(productsFromStart[i] * productsFromEnd[i]);
	}
	
	return result;
}