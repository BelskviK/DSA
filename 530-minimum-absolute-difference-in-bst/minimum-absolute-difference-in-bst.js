var getMinimumDifference = function(root) {
    let prev = null;
    let minDiff = Infinity;

    const inOrder = (node) => {
        if (!node) return;

        inOrder(node.left);

        if (prev !== null) {
            minDiff = Math.min(minDiff, Math.abs(node.val - prev));
        }
        prev = node.val;

        inOrder(node.right);
    };

    inOrder(root);
    return minDiff;
};
