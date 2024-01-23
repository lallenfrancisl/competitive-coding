/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const visited = new Map()

    let lp = 0
    let longest = 0
    for (let rp = 0; rp < s.length; rp++) {
        while (visited.has(s[rp])) {
            visited.delete(s[lp])
            lp++
        }

        longest = Math.max(rp - lp + 1, longest)
        visited.set(s[rp], true)
    }

    return longest
}
