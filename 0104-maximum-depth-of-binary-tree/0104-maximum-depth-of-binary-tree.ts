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

// use level-order traversal to traverse the tree
// keep track of our depth so lets initialize a variable depth = 0
// using while loop to process a node and enqueue its children to queue
// iterate nodes on every level and process 
// after processing all nodes in level only then we increment depth

function maxDepth(root: TreeNode | null): number {
    if (!root) return 0;
    
    const queue: TreeNode[] = [ root ];
    let depth = 0;
    
    while (queue.length > 0) {
        const levelSize = queue.length;
        
        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift();
            const [ leftChild, rightChild ] = [ currentNode.left, currentNode.right ]
            
            if (leftChild !== null) queue.push(leftChild);
            if (rightChild !== null) queue.push(rightChild);
        }
        
        depth++
    }
    
    return depth;
};