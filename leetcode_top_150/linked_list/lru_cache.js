class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity
        this.db = new Map()

        /** @type {ListNode} */
        this.head = new ListNode()

        /** @type {ListNode} */
        this.tail = new ListNode()

        this.head.next = this.tail
        this.tail.prev = this.head
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        const exists = this.db.get(key)

        if (!exists) {
            return -1
        }

        this.raise(exists)

        return exists.val
    }

    /** @param {ListNode} node  */
    raise(node) {
        if (node.next) {
            node.next.prev = node.prev
        }

        if (node.prev) {
            node.prev.next = node.next
        }

        node.next = null
        node.prev = null

        this.insert(node.key, node)
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        const exists = this.db.get(key)

        if (exists) {
            this.raise(exists)
            exists.val = value
        } else if (this.db.size < this.capacity) {
            this.insert(key, new ListNode(key, value))

            return
        } else {
            this.removeLRU()
            this.insert(key, new ListNode(key, value))
        }
    }

    removeLRU() {
        if (this.tail.prev === this.head) {
            return
        }

        const old = this.tail.prev

        this.db.delete(old.key)
        this.tail.prev = old.prev
        this.tail.prev.next = this.tail
    }

    /**
     * @param {number} key
     * @param {ListNode} node
     */
    insert(key, node) {
        const old = this.head.next
        this.head.next = node

        old.prev = node
        node.next = old
        node.prev = this.head

        this.db.set(key, node)
    }
}

class ListNode {
    constructor(key = 0, val = 0, prev = null, next = null) {
        this.key = key
        this.val = val
        this.prev = prev
        this.next = next
    }
}
