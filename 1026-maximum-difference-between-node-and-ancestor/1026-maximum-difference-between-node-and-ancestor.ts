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

function maxAncestorDiff(root: TreeNode | null): number {
    if (!root) return 0;
    
    let maxDiff = 0;
    const stack: [ TreeNode, number, number ][] = [[ root, root.val, root.val ]] 
    
    while (stack.length > 0) {
        const [node, minVal, maxVal] = stack.pop();
        
        // Calculate current difference
        const currentDiff = Math.max(maxVal - node.val, node.val - minVal);
        maxDiff = Math.max(maxDiff, currentDiff);
        
        // Update min and max for the next level
        const newMin = Math.min(minVal, node.val)
        const newMax = Math.max(maxVal, node.val)
        
        // Push left and right children to stack if they exist
        if (node.left) {
            stack.push([node.left, newMin, newMax])
        }
        if (node.right) {
            stack.push([node.right, newMin, newMax]);
        }
    }
    
    return maxDiff;
}


// deifne variable currentMin
// deifne variable currentMax
// define maxDifference after traversing left subtree
// reset currMin & currMax

// function maxAncestorDiff(root: TreeNode | null): number {
//     let maxDifference: number = 0 // 7
//     let stack: [ (TreeNode | null), number, number ][] = []         // [ [8, 8, 8 ], 3, 1]
//     let current: [ TreeNode, number, number ] = [ root, +Infinity, -Infinity ]               // null
    
//     while (current !== null || stack.length > 0) {
//         let [currentNode, min, max] = current
//         // traverse left subtree
//         while (currentNode !== null) {
//             stack.push([currentNode, Math.min(current.val, min), Math.max(current.val, max)])
//             current = current.left           
//         }
//         // process current node
//         current = stack.pop() as TreeNode   // 3
//         const temp = Math.abs(currentMax - currentMin)  //  ancestor - descendant
//         maxDifference = Math.max(temp, maxDifference)
//         // reset currMin & currMax
//         current = current.right             // null
//         if (current !== null) {
//             currentMin = root.val
//             currentMax = root.val
//         }
//     }
    
//     return maxDifference
// };