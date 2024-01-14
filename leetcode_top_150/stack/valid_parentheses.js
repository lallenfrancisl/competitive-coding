const pairs = {
    "}": "{",
    "]": "[",
    ")": "(",
}

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = []

    for (const el of s) {
        if (pairs[el] && stack.at(-1) === pairs[el]) {
            stack.pop()

            continue
        }

        stack.push(el)
    }

    return stack.length === 0
}
