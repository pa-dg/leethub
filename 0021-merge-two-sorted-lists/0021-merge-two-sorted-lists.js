/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    const dummy = new ListNode();
    let tail = dummy;
    
    while (list1 && list2) {
        if (list1.val < list2.val) {
            tail.next = new ListNode(list1.val);
            list1 = list1.next
        } else {
            tail.next = new ListNode(list2.val);
            list2 = list2.next
        }
        
        tail = tail.next;
    }
    
    if (list1) {
        tail.next = list1;
    } else {
        tail.next = list2;
    }
    
    return dummy.next;
};