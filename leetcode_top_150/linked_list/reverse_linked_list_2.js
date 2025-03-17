var reverseBetween = function(head, left, right) {
    const dummy = new ListNode(0, head)
    let curr = head

    let leftPrev = dummy
    for (let i = 1; i < left; i++) {
        leftPrev = curr
        curr = curr.next
    }

    let prev = null
    for (let i = 0; i < (right - left + 1); i++) {
        const tmpNext = curr.next
        curr.next = prev
        prev = curr
        curr = tmpNext
    }

    leftPrev.next.next = curr
    leftPrev.next = prev

    return dummy.next
};
