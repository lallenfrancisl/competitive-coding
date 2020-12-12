/**
 * Sort the first array according to the order specified by the second array.
 * The first array will only contain elements in the second array
 * 
 * SAMPLE:
 *   Input: "array": [1, 0, 0, -1, -1, 0, 1, 1], "order": [0, 1, -1]
 *   Output: [0, 0, 0, 1, 1, 1, -1, -1]
 */


 /**
  * [MY SOLUTION, takes 2 passes] 
  * Sort the first array according to the order specified by second array
  * Time: O(n)
  * Space: O(1)
  * 
  * @param {Array} array 
  * @param {Array} order 
  */
function threeNumberSort(array, order) {
	let left = 0, right = left + 1, count = 1;
  for(let orderIndex = 0; orderIndex < array.length - 1; ++orderIndex) {
		right = left + 1;
		while(right < array.length) {
			console.log(count);
			++count;
			if(array[left] === order[orderIndex]) {
				left +=1;
				right += 1;
			}
			else if(
				array[left] != order[orderIndex] && 
				array[right] === order[orderIndex]
			) {
				array[right] = array[left];
				array[left] = order[orderIndex];
				left += 1;
				right += 1;
			}
			else {
				right += 1;
			}
		}
	}
	
	return array;
}


/**
 * [MOST OPTIMAL SOLUTION, takes only 1 pass] 
 * Sort the first array according to the order specified by second array
 * Time: O(n)
 * Space: O(1)
 * 
 * @param {Array} array 
 * @param {Array} order 
 */
function threeNumberSort(array, order) {
  let firstValue = order[0];
  let secondValue = order[1];

  let firstIdx = 0, secondIdx = 0, thirdIdx = array.length - 1;

  while(secondIdx <= thirdIdx) {
    let value = array[secondIdx];

    if(value === firstValue) {
      swap(firstIdx, secondIdx, array);
      ++firstIdx;
      ++secondIdx;
    }
    else if(value === secondValue) {
      ++secondIdx;
    }
    else {
      swap(secondIdx, thirdIdx, array);
      --thirdIdx;
    }
  }

  return array;
}

function swap(i, j, array) {
  let temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}
