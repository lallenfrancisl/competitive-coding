var MinStack = function () {
    this.stack = []
    this.min = []
}

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    this.stack.push(val)

    if (!this.min.length || val <= this.min.at(-1)) {
        this.min.push(val)
    }
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    const popped = this.stack.pop()

    if (popped === this.min.at(-1)) {
        this.min.pop()
    }
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack.at(-1)
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.min.at(-1)
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
