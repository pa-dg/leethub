/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    return (isValid(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY))
};

var isValid = function(node, left, right) {
    if (!node) return true;
    
    if (!(left < node.val && right > node.val)) {
        return false;
    }
    
    return (isValid(node.left, left, node.val) && isValid(node.right, node.val, right))
};