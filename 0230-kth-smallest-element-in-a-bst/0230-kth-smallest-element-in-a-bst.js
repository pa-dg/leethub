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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let n= 0, stack = [], current = root;         //stack=[] current=[3,1,4,null,2]    
    
    while (stack.length || current) {
        while (current) {                   
            stack.push(current);
            current = current.left;
        }
        
        current = stack.pop();
        n++;
        
        if (n == k) {
            return current.val;
        } else {
            current = current.right
        }
    }
};