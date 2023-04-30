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
    let stack = [], curr = root;                // use stack to traverse thru BST
    
    while (stack.length || curr) {              // continue running while stack/curr is non-empty
        while (curr) {                          // continue pushing node to stack while curr is not null
            stack.push(curr);
            curr = curr.left;
        }
        
        curr = stack.pop();                     // assign popped node off stack to curr
        k--;                                    // decrement k
        if (k === 0) {                          // if k=0, we found the kth smallest val
            return curr.val;            
        } else {                                // assign right child to curr
            curr = curr.right; 
        }
    }
};