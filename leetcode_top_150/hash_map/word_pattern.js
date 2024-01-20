/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    const sWords = s.split(" ")

    if (pattern.length !== sWords.length) {
        return false
    }

    const mapPS = new Map()
    const mapSP = new Map()

    for (let i = 0; i < sWords.length; i++) {
        const pWord = pattern[i]
        const sWord = sWords[i]

        const mappedPS = mapPS.get(pWord)
        const mappedSP = mapSP.get(sWord)

        if (
            (mappedPS && mappedPS !== sWord) ||
            (mappedSP && mappedSP !== pWord)
        ) {
            return false
        }

        mapPS.set(pWord, sWord)
        mapSP.set(sWord, pWord)
    }

    return true
}
