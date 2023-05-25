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
    let curr = head;
    const list = Array();
    
    while (curr) {
        list.push(curr.val);
        curr = curr.next;
    }
    
    let maxTwinSum = 0;
    const len = list.length;
    
    for (let i = 0; i < len / 2; i++) {
        const sum = list[i] + list[len - 1 - i];
        maxTwinSum = Math.max(sum, maxTwinSum);
    }
    
    return maxTwinSum;
};