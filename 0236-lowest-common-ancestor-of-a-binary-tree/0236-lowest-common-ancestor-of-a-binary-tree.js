/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (!root || (root === p || root === q)) return root;
    
    let left_res = lowestCommonAncestor(root.left, p, q);
    let right_res = lowestCommonAncestor(root.right, p, q);
    
    if (left_res && right_res) {
        return root;
    } else {
        return left_res || right_res;
    }
};