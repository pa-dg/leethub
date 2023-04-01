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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if (!subRoot) return true;
    if (!root) return false;
    
    if (isSameTree(root, subRoot)) return true;
    
    return (isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot));
};

var isSameTree = function(r, s) {
    if (!r && !s) return true;
    if ((r && s) && (r.val === s.val)) {
        return (isSameTree(r.left, s.left) && isSameTree(r.right, s.right));  
    };
    
    return false;
};

// create a helper func to check subtrees
// helper func finds if tree and subtree are identical
// helper func base cases: !root && !subRoot, root && subRoot && root.val != subRoot.val

// main func edge cases: !subRoot return true, !root return false, call the helper func
// main func finds a subtree