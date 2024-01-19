const operators = {
    "+": (l, r) => l + r,
    "-": (l, r) => l - r,
    "*": (l, r) => l * r,
    "/": (l, r) => Math.trunc(l / r),
}

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const stack = []

    for (let i = 0; i < tokens.length; i++) {
        if (operators[tokens[i]]) {
            const operand2 = stack.pop()
            const operand1 = stack.pop()

            stack.push(operators[tokens[i]](Number(operand1), Number(operand2)))
        } else {
            stack.push(tokens[i])
        }
    }

    return stack.pop()
}
