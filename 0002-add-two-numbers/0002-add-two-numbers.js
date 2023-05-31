/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
//     let curr1 = l1, curr2 = l2, carry = 0;
//     let dummy = new ListNode();
//     let tail = dummy;
    
//     while (curr1 || curr2 || carry) {
//         let val1, val2;
        
//         if (!curr1) {
//             val1 = 0;
//         } else {
//             curr1.val;
//         }
        
//         if (!curr2) {
//             val2 = 0;
//         } else {
//             curr2.val;
//         }
        
//         const sum = val1 + val2 + carry;
        
//     };
    let sentinel = tail = new ListNode();

    return add(l1, l2, tail, sentinel);       /* Time O(MAX(N, M)) | Space O(MAX(N, M)) */
}

const add = (l1, l2, tail, sentinel, carry = 0) => {
    const isBaseCase = !(l1 || l2 || carry);
    if (isBaseCase) return sentinel.next;

    return dfs(l1, l2, tail, sentinel, carry);/* Time O(MAX(N, M)) | Space O(MAX(N, M)) */
}

const dfs = (l1, l2, tail, sentinel, carry) => {
    const sum = (l1?.val || 0) + (l2?.val || 0) + carry;
    const val = sum % 10;
    carry = Math.floor(sum / 10);

    tail.next = new ListNode(val);
    tail = tail.next;

    l1 = l1?.next || null;
    l2 = l2?.next || null;

    add(l1, l2, tail, sentinel, carry);     /* Time O(MAX(N, M)) | Space O(MAX(N, M)) */

    return sentinel.next;
};

// scenarious:
// 1. both lists are same length
// 2. one of the list is longer
// 3. sum has carry
// 4. if last node has carry, output will be longer than input