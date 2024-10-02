/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// goal is to return total sum of ALL root-to-leaf path numbers
// can use stack data structure to traverse through paths, or recursion
// on leaf node case, we just want to keep track of the 'numbers' and add to a variable totalSum
// if theres left/right child, just keep traversing

function sumNumbers(root: TreeNode | null): number {
    // Helper function to perform the recursion
    function dfs(node: TreeNode | null, currentSum: number): number {
        if (!node) return 0; // If the node is null, return 0
        
        currentSum = currentSum * 10 + node.val; // Update current sum
        
        // If it's a leaf node, return the current sum
        if (!node.left && !node.right) {
            return currentSum;
        }
        
        // Recur for left and right children
        return dfs(node.left, currentSum) + dfs(node.right, currentSum);
    }

    return dfs(root, 0); // Start recursion with the root and initial sum of 0
};