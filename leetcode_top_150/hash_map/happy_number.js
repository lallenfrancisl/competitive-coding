/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    const visited = new Set()

    let sum = n
    while (sum !== 1) {
        sum = sumSquares(sum)
        if (visited.has(sum)) {
            return false
        }

        visited.add(sum)
    }

    return true
}

function sumSquares(n) {
    const str = `${n}`

    let sum = 0
    for (const letter of str) {
        const num = Number(letter)
        sum += num * num
    }

    return sum
}
