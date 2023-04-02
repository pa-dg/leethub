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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return [];
    
    let queue = [ root ], res = [];
    console.log('q', queue)
    
    while (queue.length) {
        let len = queue.length, row = [];
        console.log('len', len)
        
        for (let i=0; i<len; i++) {
            console.log('i', i)
            let current = queue.shift();
            console.log('curr shift', current)
            row.push(current.val);
            console.log('row', row)
            
            if (current.left) queue.push(current.left);
            console.log('curr left', current.left)
            if (current.right) queue.push(current.right);
            console.log('curr right', current.right)
            console.log('current queue after children', queue)
            console.log('qlen after children', len)
        }
        res.push(row)
        console.log('res', res)
        console.log('current queue', queue)
    }
    
    return res;
};