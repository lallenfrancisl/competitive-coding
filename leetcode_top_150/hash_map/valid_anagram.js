/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false
    }

    const letters = new Map()

    for (let i = 0; i < s.length; i++) {
        const value = letters.get(s[i])

        if (value) {
            letters.set(s[i], value + 1)
        } else {
            letters.set(s[i], 1)
        }
    }

    for (let i = 0; i < t.length; i++) {
        const value = letters.get(t[i])

        if (!value) {
            return false
        }

        letters.set(t[i], value - 1)
    }

    return true
}
