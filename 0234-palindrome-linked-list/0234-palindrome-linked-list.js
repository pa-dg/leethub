/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let [slow, fast] = [head, head];
    
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    };
    
    let prev = null;
    while (slow) {
        let next = slow.next;
        slow.next = prev;
        prev = slow;
        slow = next;
    }
    
    // 1 -> 2 -> 2 -> 1 ==> 1 -> 2 -> 1 -> 2 -> null
    
    let [left, right] = [head, prev];
    while (right) {
        if (left.val !== right.val) {
            return false;
        }
        
        left = left.next;
        right = right.next;
    }
    
    return true;
};