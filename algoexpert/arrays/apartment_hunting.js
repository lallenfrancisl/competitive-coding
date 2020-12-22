/**
 * Find the index of the apartment block that has requirements specified in the
 * reqs array the closest to it.
 * 
 * Time: O(b^2r) b is length of blocks array, r is the numbers of requirements
 * Space: O(b)
 * 
 * @param {Array} blocks 
 * @param {Array} reqs 
 */
function apartmentHunting(blocks, reqs) {
	let maxDistances = blocks.map(_ => -Infinity);
	
	for(let i = 0; i < blocks.length; i += 1) {
		for(const req of reqs) {
			let closestReqDistance = Infinity;
			for(let j = 0; j < blocks.length; j += 1) {	
		 		if(blocks[j][req]) {
					closestReqDistance = Math.min(closestReqDistance, distanceBetween(i, j));
				}
			}
			maxDistances[i] = Math.max(maxDistances[i], closestReqDistance);
		}
	}
	
	console.log(maxDistances);
	console.log(minDistanceBlock(maxDistances));	
	
	return minDistanceBlock(maxDistances);
}


/**
 * Find the index of the apartment block that has requirements specified in the
 * reqs array the closest to it.
 * 
 * Time: O(br)
 * Space: O(br)
 * 
 * @param {Array} blocks 
 * @param {Array} reqs 
 */
function apartmentHunting(blocks, reqs) {
	let minDistancesFromBlocks = reqs.map(req => getMinDistances(blocks, req));
	let maxDistancesAtBlocks = getMaxDistancesAtBlocks(blocks, minDistancesFromBlocks);
	
	console.log(maxDistancesAtBlocks);

	return minDistanceBlock(maxDistancesAtBlocks);
}

/**
 * get the minimum distances of the req for each blocks
 * @param {Array} blocks 
 * @param {Array} req 
 */
function getMinDistances(blocks, req) {
	let minDistances = new Array(blocks.length);
	let closestReqIndex = Infinity;
	
	for(let i = 0; i < blocks.length; i += 1) {
		if(blocks[i][req]) closestReqIndex = i;
		
		minDistances[i] = distanceBetween(i, closestReqIndex);
	}
	
	for(let i = blocks.length - 1; i >= 0; i -= 1) {
		if(blocks[i][req]) closestReqIndex = i;
		
		minDistances[i] = Math.min(minDistances[i], distanceBetween(i, closestReqIndex));
	}
	
	return minDistances;
}

/**
 * Find the max distances among the requirements for each blocks
 * @param {Array} blocks 
 * @param {Array} minDistancesAtBlocks 
 */
function getMaxDistancesAtBlocks(blocks, minDistancesAtBlocks) {
	let maxDistances = new Array(blocks.length);
	
	for(let i = 0; i < blocks.length; i += 1) {
		let maxValue = -Infinity;
		for(const distances of minDistancesAtBlocks) {
			maxValue = Math.max(maxValue, distances[i]);
		}
		
		maxDistances[i] = maxValue;
	}
	
	return maxDistances;
}


/**
 * Return the absolute distance between two indexes
 * @param {Number} i 
 * @param {Number} j 
 */
function distanceBetween(i, j) {
	return Math.abs(i - j);
}

/**
 * Find the index of the block with the minimum distance
 * @param {Array} array 
 */
function minDistanceBlock(array) {
	let minValueIndex = 0;
	
	for(let i = 0; i < array.length; i += 1) {
		if(array[i] < array[minValueIndex]) {
			minValueIndex = i;
		}
	}
	
	return minValueIndex;
}