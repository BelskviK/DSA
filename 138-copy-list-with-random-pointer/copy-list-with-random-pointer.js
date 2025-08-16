/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    if (!head) return null;

    let map = new Map();

    // First pass: copy all nodes (without connections yet)
    let current = head;
    while (current) {
        map.set(current, new _Node(current.val, null, null));
        current = current.next;
    }

    // Second pass: assign next and random pointers
    current = head;
    while (current) {
        let copyNode = map.get(current);
        copyNode.next = current.next ? map.get(current.next) : null;
        copyNode.random = current.random ? map.get(current.random) : null;
        current = current.next;
    }

    return map.get(head);
};
