var maxDepth = function(root: any): number {
  return maxDep(root);
};

function maxDep(root: any): number {
  if (!root) return 0;
  return 1 + Math.max(maxDep(root.left), maxDep(root.right));
}
