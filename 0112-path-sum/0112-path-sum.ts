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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (!root) return false // no node case
    
    targetSum -= root.val
    
    if (!root.left && !root.right) {    // leaf node case
        if (targetSum == 0) return true
    }
    
    return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum)
};