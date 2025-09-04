var partition = function(head, x) {
    if (!head) return null;

    // Dummy heads
    let beforeHead = new ListNode(0);
    let afterHead = new ListNode(0);

    let before = beforeHead;
    let after = afterHead;

    // Traverse and split nodes
    while (head) {
        if (head.val < x) {
            before.next = head;
            before = before.next;
        } else {
            after.next = head;
            after = after.next;
        }
        head = head.next;
    }

    // Connect before list to after list
    after.next = null;        // Important to avoid cycle
    before.next = afterHead.next;

    return beforeHead.next;
};
