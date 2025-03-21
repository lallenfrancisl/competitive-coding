var rotateRight = function (head, k) {
    if (!head?.next || k === 0) {
        return head;
    }

    let length = 1

    let tail = head
    while (tail.next) {
        length++
        tail = tail.next
    }

    k = k % length
    if (k === 0) {
        return head
    }

    let prev = head
    for (let i = 0; i < length - k - 1; i++) {
        prev = prev.next
    }

    const newHead = prev.next
    prev.next = null
    tail.next = head

    return newHead
}
