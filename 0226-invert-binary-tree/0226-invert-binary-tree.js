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

// Solution 1 - iterative
// var invertTree = function(root) {
//     if (!root) return root;
    
//     let stack = [ root ];
    
//     while (stack.length > 0) {
//         const current = stack.pop();
        
//         if (current != null) {
//             [current.left, current.right] = [current.right, current.left]
//             stack.push(current.left, current.right)
//         }
//     }
//     return root;
// };


// Solution 2 - recursive
var invertTree = function(root) {
    if (!root) return null;
    
//     swap the children
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    
    invertTree(root.left);
    invertTree(root.right);
    
    return root;
};