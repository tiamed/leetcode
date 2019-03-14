var maxDepth = function (root) {
    return maxDep(root);
};

function maxDep(root) {
    if (!root) return 0;
    return 1 + Math.max(maxDep(root.left), maxDep(root.right));
}