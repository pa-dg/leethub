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
 * @return {number}
 */

// Solution 1 - recursive DFS
// var maxDepth = function(root) {
//     if (!root) return 0;
    
//     return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
// };


// Solution 2 - iterative BFS
var maxDepth = function(root) {
    if (!root) return 0;
    
    let queue = [ root ];
    let depth = 0;
    
    while (queue.length) {
        let len = queue.length; 
        
        for (let i=0; i<len; i++) {
           let node = queue.shift();

           if (node.left) {
               queue.push(node.left)
           }
           if (node.right) {
               queue.push(node.right)
           }
        }
        depth++;
    };
    
    return depth;
};