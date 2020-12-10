/**
 * Validate if the sequence is a valid subsequence of the
 * array
 * @param {Array} array 
 * @param {Array} sequence 
 */
function isValidSubsequence(array, sequence) {
	let subseqIndex = 0;
	
  for(const num of array) {
		if(num === sequence[subseqIndex]) {
			++subseqIndex;
		}
	}
	
	return sequence.length === subseqIndex;
}
