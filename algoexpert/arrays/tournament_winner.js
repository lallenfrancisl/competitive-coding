/**
 * Find the winner in a competition when the competition
 * given an array which shows the teams competing against
 * each other in competitions array and their results in
 * another array results. 
 *
 * Each entry in the competitions array is of the form
 * [homeTeam, awayTeam]. In the results array if 1 is present
 * then homeTeam won in that competition and if 0 is present
 * then awayTeam has won. 
 *
 * SAMPLE:
 *   Input: 
 *     competitions: [
 *	     ['HTML', 'C#'],
 *		   ['C#', 'Python'],
 *		   ['Python', 'HTML'],
 *	   ]
 *
 *	   results: [0, 0, 1]
 *	 
 *	 Output: Python
*/

function tournamentWinner(competitions, results) {
	const pointsTable = {'': 0};
	let winner = '';

  competitions.forEach((comp, index) => {
		let currentWinner = '';
    if (results[index] === 1) {
			comp[0] in pointsTable
        ? (pointsTable[comp[0]] += 3)
        : (pointsTable[comp[0]] = 3);

			currentWinner = comp[0];
    } else {
			comp[1] in pointsTable
        ? (pointsTable[comp[1]] += 3)
        : (pointsTable[comp[1]] = 3);

			currentWinner = comp[1];
    }

		if (pointsTable[currentWinner] > pointsTable[winner]) {
			winner = currentWinner;
		}
  });

  return winner;
}

// Do not edit the line below.
exports.tournamentWinner = tournamentWinner;
