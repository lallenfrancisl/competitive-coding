/**
 * Find the number of all the rewards given to a class of students, given an
 * array of their scores.
 * 
 * The rewards are given to the students arbirtrarily following two rules
 *    1. All students must receive at least one reward
 *    2. Any given student must receive more rewards than an adjacent
 *       student (student to the left or right) with a lower score and must
 *       receive strictly fewer rewards than an adjacent student with a higher score.
 * 
 * SAMPLE:
 *   Input: scores = [8, 4, 2, 1, 3, 6, 7, 9, 5]
 *   Output: 25 // rewards: [4, 3, 2, 1, 2, 3, 4, 5, 1]
 */

/**
 * FIRST SOLUTION 
 * Find the number of rewards that must be given to all the students combined
 * 
 * Time: O(n)
 * Space: O(n)
 * 
 * @param {Array} scores 
 */
function minRewards(scores) {
	let rewards = scores.map(_ => 1);
	
	for(let i = 0; i < scores.length; i += 1) {
		if(i === 0) {
			if(scores[i] < scores[i + 1]) {
				fillRewardsFromLocalMin(i, scores, rewards);
			}
		}
		else if(i === (scores.length - 1)) {
			if(scores[i] < scores[i - 1]) {
				fillRewardsFromLocalMin(i, scores, rewards);
			}
		}
		else {
			if(scores[i] < scores[i - 1] && scores[i] < scores[i + 1]) {
				fillRewardsFromLocalMin(i, scores, rewards);
			}
		}
	}
	
	// sum the rewards
	let sum = 0;
	for(const reward of rewards) {
		sum += reward;
	}
	
	return sum;
}

/**
 * Fill the rewards from a local minimum index
 * 
 * Time: O(n)
 * Space: O(1)
 * 
 * @param {Number} localMinIndex 
 * @param {Array} scores 
 * @param {Array} rewards 
 */
function fillRewardsFromLocalMin(localMinIndex, scores, rewards) {
	// fill to the left side
	let leftIndex = localMinIndex - 1;
	while(leftIndex >= 0 && scores[leftIndex] > scores[leftIndex + 1]) {
		rewards[leftIndex] = Math.max(rewards[leftIndex + 1] + 1, rewards[leftIndex]);
		leftIndex -= 1;
	}
	
	// fill to the right side 
	let rightIndex = localMinIndex + 1;
	while(rightIndex < scores.length && scores[rightIndex] > scores[rightIndex - 1]) {
		rewards[rightIndex] = rewards[rightIndex - 1] + 1;
		rightIndex += 1;
	}
}

/**
 * SECOND SOLUTION
 * Find the number of rewards that must be given to all the students combined
 * 
 * Time: O(n)
 * Space: O(n)
 * 
 * @param {Array} scores 
 */
function minRewards(scores) {
	let rewards = [1];
	
	for(let i = 1; i < scores.length; i += 1) {
		rewards.push(1);
		
		if(scores[i] > scores[i - 1]) {
			rewards[i] = rewards[i - 1] + 1;
		}
	}
	
	for(let i = scores.length - 2; i >= 0; i -= 1) {
		if(scores[i] > scores[i + 1]) {
			rewards[i] = Math.max(rewards[i], rewards[i + 1] + 1);
		}
	}
	
	// sum the rewards
	let sum = 0;
	for(const reward of rewards) {
		sum += reward;
	}
	
	return sum;
}