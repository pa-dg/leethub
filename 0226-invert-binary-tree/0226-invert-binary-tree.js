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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) return root;
    
    let stack = [ root ];
    
    while (stack.length > 0) {
        const current = stack.pop();
        
        if (current != null) {
            [current.left, current.right] = [current.right, current.left]
            stack.push(current.left, current.right)
        }
    }
    return root;
};