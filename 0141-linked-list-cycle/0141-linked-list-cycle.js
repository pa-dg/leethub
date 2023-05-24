/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let [left, right] = [head, head]    
    
    while (right && right.next) {
        right = right.next.next
        left = left.next;
        
        if (right == left) {
            return true;
        }
        
    }
    
    return false;
};