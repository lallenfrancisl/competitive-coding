var deleteDuplicates = function (head) {
    const dummy = new ListNode(0, head)

    let prev = dummy
    let curr = head

    while (curr?.next) {
        let next = curr.next

        if (curr.val === next.val) {
            while(next && curr.val === next.val) {
                next = next.next
                curr = curr.next
            }

            prev.next = next
        } else {
            prev = prev.next
        }

        curr = curr.next
    }

    return dummy.next
}
