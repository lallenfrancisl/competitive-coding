/**
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    let slow = head;
    let fast = head?.next || null;

    while (fast?.next) {
        if (slow === fast) {
            return true;
        }

        slow = slow.next;
        fast = fast.next.next;
    }

    return false;
};

/**
 * @param {number} val
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
