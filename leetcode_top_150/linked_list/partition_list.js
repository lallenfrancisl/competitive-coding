var partition = function (head, x) {
    let before = new ListNode(0)
    let after = new ListNode(0)
    let currBefore = before
    let currAfter = after

    let curr = head
    while (curr) {
        const next = curr.next
        curr.next = null

        if (curr.val < x) {
            currBefore.next = curr
            currBefore = currBefore.next
        } else {
            currAfter.next = curr
            currAfter = currAfter.next
        }

        curr = next
    }

    currBefore.next = after.next

    return before.next
}
