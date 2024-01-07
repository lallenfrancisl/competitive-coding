/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let lp = 0
    let rp = s.length - 1

    while (lp < rp) {
        const left = s[lp].toLowerCase()
        const right = s[rp].toLowerCase()

        if (!isValidChar(left)) {
            lp += 1
            continue
        }

        if (!isValidChar(right)) {
            rp -= 1
            continue
        }

        if (left !== right) {
            return false
        }

        lp += 1
        rp -= 1
    }

    return true
}

function isValidChar(ch) {
    const code = ch.charCodeAt(0)

    return (code >= 97 && code <= 122) || (code >= 48 && code <= 57)
}
