/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    // let dummy = new ListNode(-Infinity, head);
    let curr = head;
    
    while (curr) {
        while (curr.next && curr.val === curr.next.val) {
            curr.next = curr.next.next;
        }
        
        curr = curr.next;
    }
    
    return head;
};

//        [     1,          1,              2   ]
//        d
//                   -------->        curr