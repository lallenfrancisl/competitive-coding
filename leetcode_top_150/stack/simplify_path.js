/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    const parts = path.split("/")

    const stack = []

    for (const part of parts) {
        if (!part.length) {
            continue
        }

        if (part === ".") {
            continue
        }

        if (part === "..") {
            stack.pop()

            continue
        }

        stack.push(part)
    }

    return "/" + stack.join("/")
}
