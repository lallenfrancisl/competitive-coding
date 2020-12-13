/**
 * Implement insertion, checking if value exists and removal in a BST
 */

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  /**
   * Insert a value in to the BST
   * 
   * Time:
   *   Average: O(log(n))
   *   Worst: O(n)
   * Space:
   *   Average: O(1)
   *   Worst: O(1)
   * 
   * @param {Any} value 
   */
  insert(value) {
		let currentNode = this;
		
		while(true) {
			if(value < currentNode.value) {
				if(currentNode.left === null) {
					currentNode.left = new BST(value);
					break;
				}
				else {
					currentNode = currentNode.left;
				}
			}
			else {
				if(currentNode.right === null) {
					currentNode.right = new BST(value);
					break;
				}
				else {
					currentNode = currentNode.right;
				}
			}
		}
		
    // Do not edit the return statement of this method.
    return this;
  }

  /**
   * Check if a BST contains a value
   * 
   * Time:
   *   Average: O(log(n))
   *   Worst: O(n)
   * Space:
   *   Average: O(1)
   *   Worst: O(1)
   * 
   * @param {Any} value 
   */
  contains(value) {
    let currentNode = this;
		
		while(currentNode != null) {
			if(value > currentNode.value) {
				currentNode = currentNode.right;
			}
			else if(value < currentNode.value) {
				currentNode = currentNode.left;
			}
			else {
				return true;
			}
		}
		
		return false;
  }

  /**
   * Remove a node from a BST
   * 
   * Time:
   *   Average: O(log(n))
   *   Worst: O(n)
   * Space:
   *   Average: O(1)
   *   Worst: O(1)
   * 
   * @param {Any} value 
   * @param {BST} parentNode 
   */
  remove(value, parentNode = null) {
		let currentNode = this;
		
		while(currentNode != null) {
			if(value < currentNode.value) {
				parentNode = currentNode;
				currentNode = currentNode.left;
			}
			else if(value > currentNode.value) {
				parentNode = currentNode;
				currentNode = currentNode.right;
			}
			else {
				if(currentNode.left != null && currentNode.right != null) {
					currentNode.value = currentNode.right.getMinValue();
					currentNode.right.remove(currentNode.value, currentNode);
				}
				else if(parentNode === null) {
					if(currentNode.left != null) {
						currentNode.value = currentNode.left.value;
						currentNode.right = currentNode.left.right;
						currentNode.left = currentNode.left.left;
					}
					else if(currentNode.right != null) {
						currentNode.value = currentNode.right.value;
						currentNode.left = currentNode.right.left;
						currentNode.right = currentNode.right.right;
					}
					else {
						// currentNode.value = null;
					}
				}
				else if(parentNode.left === currentNode) {
					if(currentNode.left != null) {
						parentNode.left = currentNode.left;
					}
					else {
						parentNode.left = currentNode.right;
					}
				}
				else if(parentNode.right === currentNode) {
					if(currentNode.right != null) {
						parentNode.right = currentNode.right;
					}
					else {
						parentNode.right = currentNode.left;
					}
				}
				break;
			}
		}
		
    // Do not edit the return statement of this method.
    return this;
  }
  
  /**
   * Get min value in a tree
   * 
   * Time:
   *   Best: O(log(n))
   *   Average: O(log(n))
   *   Worst: O(n)
   * Space: O(1)
   */
	getMinValue() {
		let currentNode = this;
		
		while(currentNode.left != null) {
			currentNode = currentNode.left;
		}
		
		return currentNode.value;
	}
}