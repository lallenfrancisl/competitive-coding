var mergeTwoLists = function (list1, list2) {
  let head = new ListNode(0);
  let merged = head

  while (list1 || list2) {
    if (typeof list1?.val !== "number") {
      merged.next = new ListNode(list2.val);
      list2 = list2.next;
    } else if (typeof list2?.val !== "number") {
      merged.next = new ListNode(list1.val);
      list1 = list1.next;
    } else if (list1.val > list2.val) {
      merged.next = new ListNode(list2.val);
      list2 = list2.next;
    } else {
      merged.next = new ListNode(list1.val);
      list1 = list1.next;
    }

    merged = merged.next;
  }

  return head.next;
};
