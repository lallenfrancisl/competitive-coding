var copyRandomList = function (head) {
  const index = new Map();
  index.set(null, null);

  let curr = head;
  while (curr) {
    const copy = { val: curr.val };
    index.set(curr, copy);

    curr = curr.next;
  }

  curr = head;
  while (curr) {
    const copy = index.get(curr);
    copy.next = index.get(curr.next);
    copy.random = index.get(curr.random);

    curr = curr.next;
  }

  return index.get(head);
};

