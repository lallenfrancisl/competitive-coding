var removeNthFromEnd = function (head, n) {
    let dummy = new ListNode(0, head)
    let slow = head
    let fast = head

    for (let i = 0; i < n; i++) {
        fast = fast?.next || null
    }

    if (!fast) {
        return head.next
    }

    while (fast?.next) {
        fast = fast.next
        slow = slow.next
    }

    slow.next = slow.next.next

    return dummy.next
}
