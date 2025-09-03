/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let dummy = new ListNode(0, head); // dummy node before head
    let prev = dummy; // prev points to the last node before duplicates
    
    while (head) {
        // If it's a start of duplicates sublist
        // skip all duplicates
        if (head.next && head.val === head.next.val) {
            while (head.next && head.val === head.next.val) {
                head = head.next;
            }
            // Skip all duplicates
            prev.next = head.next;
        } else {
            // Otherwise, move prev pointer
            prev = prev.next;
        }
        head = head.next;
    }
    
    return dummy.next;
};
