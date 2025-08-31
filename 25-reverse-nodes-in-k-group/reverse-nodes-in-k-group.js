/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if (!head || k === 1) return head;

    let dummy = new ListNode(0, head);
    let groupPrev = dummy;

    while (true) {
        // find kth node
        let kth = getKth(groupPrev, k);
        if (!kth) break;

        let groupNext = kth.next;

        // reverse group
        let prev = kth.next;
        let curr = groupPrev.next;

        while (curr !== groupNext) {
            let tmp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = tmp;
        }

        // reconnect
        let tmp = groupPrev.next;
        groupPrev.next = kth;
        groupPrev = tmp;
    }

    return dummy.next;
};

// helper: find k-th node from current
function getKth(curr, k) {
    while (curr && k > 0) {
        curr = curr.next;
        k--;
    }
    return curr;
}
