var addTwoNumbers = function (l1, l2) {
    let head = new ListNode(0);
    let curr = head;
    let carry = 0;

    while (carry || l1 || l2) {
        const x = l1?.val || 0;
        const y = l2?.val || 0;
        const sum = carry + x + y;

        curr.next = new ListNode(sum % 10);
        curr = curr.next;
        carry = Math.floor(sum / 10);

        l1 = l1?.next || null;
        l2 = l2?.next || null;
    }

    return head.next;
};
