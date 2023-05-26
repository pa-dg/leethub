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

// create a dummy node to link the head of the merged list
// create a tail node to keep track of the last node added to merged list
// add a condition checking the lesser node, which will be the one added to merged list

var mergeTwoLists = function(list1, list2) {
    const dummy = new ListNode();
    let tail = dummy;
    let curr1 = list1;
    let curr2 = list2;
    
    while (curr1 && curr2) {
        if (curr1.val < curr2.val) {
            tail.next = curr1;
            curr1 = curr1.next;
        } else {
            tail.next = curr2;
            curr2 = curr2.next;
        }
        
        tail = tail.next;
    }
    
    if (curr1) {
        tail.next = curr1;
    }
    if (curr2) {
        tail.next = curr2;
    }
    
    return dummy.next;
};