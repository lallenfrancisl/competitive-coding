/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    const letters = {}

    for (let i = 0; i < magazine.length; ++i) {
        if (!letters[magazine[i]]) {
            letters[magazine[i]] = 0
        }

        ++letters[magazine[i]]
    }

    for (let i = 0; i < ransomNote.length; ++i) {
        if (letters[ransomNote[i]]) {
            letters[ransomNote[i]] -= 1
        } else {
            return false
        }
    }

    return true
}
