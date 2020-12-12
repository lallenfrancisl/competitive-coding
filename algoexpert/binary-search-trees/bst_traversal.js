/**
 * Traverse a tree in-order, pre-order and post-order
 */

/**
 * Traverse a BST in-order
 * 
 * Time: O(n)
 * Space: O(n)
 * 
 * @param {Tree} tree 
 * @param {Array} array 
 */
function inOrderTraverse(tree, array) {
	// base case 
  if(tree === null) return;
  
  // recursion case
	inOrderTraverse(tree.left, array);
	array.push(tree.value);
	inOrderTraverse(tree.right, array);
	
	return array;
}

/**
 * Traverse a BST in pre-order
 * 
 * Time: O(n)
 * Space: O(n)
 * 
 * @param {Tree} tree 
 * @param {Array} array 
 */
function preOrderTraverse(tree, array) {
  // base case 
  if(tree === null) return;
  
  // recursion case
	array.push(tree.value);
	preOrderTraverse(tree.left, array);
	preOrderTraverse(tree.right, array);
	
	return array;
}

/**
 * Traverse a BST post-order
 * 
 * Time: O(n)
 * Space: O(n)
 * 
 * @param {Tree} tree 
 * @param {Array} array 
 */
function postOrderTraverse(tree, array) {
  // base case 
  if(tree === null) return;
  
  // recursion case
	postOrderTraverse(tree.left, array);
	postOrderTraverse(tree.right, array);
	array.push(tree.value);
	
	return array;
}