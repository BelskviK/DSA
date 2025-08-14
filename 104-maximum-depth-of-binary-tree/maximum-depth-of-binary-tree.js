/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0; // empty tree

    let leftDepth = maxDepth(root.left);
    let rightDepth = maxDepth(root.right);

    return 1 + Math.max(leftDepth, rightDepth);
};
