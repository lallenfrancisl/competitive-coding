var RandomizedSet = function () {
    this.items = []
    this.itemMap = {}
}

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (val in this.itemMap) {
        return false
    }

    this.items.push(val)
    this.itemMap[val] = this.items.length - 1
    return true
}

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if (!(val in this.itemMap)) {
        return false
    }

    const itemIndex = this.itemMap[val]
    const lastOne = this.items[this.items.length - 1]
    this.items[this.items.length - 1] = this.items[itemIndex]
    this.items[itemIndex] = lastOne
    this.items.pop()

    this.itemMap[lastOne] = itemIndex
    delete this.itemMap[val]

    return true
}

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    return this.items[Math.floor(Math.random() * this.items.length)]
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
