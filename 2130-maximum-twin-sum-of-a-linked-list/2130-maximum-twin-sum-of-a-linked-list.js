/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    const list = Array();
    let curr = head;
    
    while (curr) {
        list.push(curr.val);
        curr = curr.next;
    }
    
    let maxTwinSum = 0;
    for (let i = 0; i < list.length / 2; i++) {
        sum = list[i] + list[list.length - 1 - i];
        maxTwinSum = Math.max(maxTwinSum, sum);
    }
    
    return maxTwinSum;
};