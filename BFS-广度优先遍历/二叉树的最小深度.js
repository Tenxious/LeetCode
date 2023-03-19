/**
     给定一个二叉树，找出其最小深度。

    最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

    说明：叶子节点是指没有子节点的节点。
 */

// DFS
function minDepth(root) {
    if (root === null) return 0;
    const lson = minDepth(root.left);
    const rson = minDepth(root.right);
    if (lson === 0) {
        return rson + 1;
    } else if (rson === 0) {
        return lson + 1;
    } else {
        return Math.min(lson, rson) + 1;
    }
    
}