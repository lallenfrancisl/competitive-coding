/**
 * Find the closest value to target in the tree. 
 * Assumes there is only one closest value
 * @param {BST} tree 
 * @param {Number} target 
 */
function findClosestValueInBst(tree, target) {
	return findClosestValueInBstHelper(tree, target, tree.value);
}

function findClosestValueInBstHelper(tree, target, closestValue) {
	/**
		BASE CASE: return closestValue when the node is null
	**/
	if(tree == null) {
		return closestValue;
	}
	
	/**
		RECURSION: compare the value of the current node to the target.
		If the value of the node is less than target then because of the
		property of a valid BST all of the value to the left is discarded
		because the values to the left will be smaller and hence farther
		from the target. Finding closest is repeated on right side. 

		If the value of the node is larger then the right side is discarded
		and finding closest is repeated on left side.
	**/
	let valueDiff = Math.abs(target - tree.value),
			closestDiff = Math.abs(target - closestValue);
	
	if(closestDiff > valueDiff) {
		closestValue = tree.value;
	}
	
	if(tree.value < target) {
		return findClosestValueInBstHelper(tree.right, target, closestValue);
	}
	else {
		return findClosestValueInBstHelper(tree.left, target, closestValue);
	}
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}