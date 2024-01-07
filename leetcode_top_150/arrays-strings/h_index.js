/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
    citations.sort((a, b) => b - a)

    let hIndex = 0
    for (let i = 0; i < citations.length; i += 1) {
        if (citations[i] >= i + 1) {
            hIndex = i + 1
        } else {
            break
        }
    }

    return hIndex
}
