/**
 * Given a list of coins (positive integers), return the minmum value of change
 * that we cannot make from that coin list
 *
 * SAMPLE:
 *   Input: [5, 7, 1, 1, 2, 3, 22]
 *   Output: 20
 */


/**
* Find the minimum non constructible change for a given 
* list of coins
*
* @param {number[]} coins
* @returns {number}
*/
function nonConstructibleChange(coins) {
	// sort the coin list ascending
	const sortedCoins = [...coins];
	sortedCoins.sort((a, b) => {
		return a > b ? 1 : -1;
	});

	// if the smallest coin we have is greater than 1
	// then the smallest change that we can't construct is 1
	if (sortedCoins[0] > 1) {
		return 1;
	}

	let minSum = 0;
	for (let i = 0; i < sortedCoins.length; i += 1) {
    /*
     * if the next coin in the coin list we have
     * is larger than the current sum we can make plus 1
     * then that means we cannot make that
     */

    if (sortedCoins[i] > minSum + 1) {
      return minSum + 1;
    }

    minSum += sortedCoins[i];
  }

  return minSum + 1;
}

// Do not edit the line below.
exports.nonConstructibleChange = nonConstructibleChange;
