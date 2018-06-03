/**
 * Definition for singly-linked list. */
 function ListNode(val) {
      this.val = val;
      this.next = null;
 }
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let head = new ListNode(0);
    let mergedList = head;
    while (l1 != null && l2 != null) {
        let val1 = (l1 != null) ? l1.val : Integer.MAX_VALUE;
		let val2 = (l2 != null) ? l2.val : Integer.MAX_VALUE;
		mergedList.next = new ListNode(Math.min(val1, val2));
		mergedList = mergedList.next;
		if (val1 < val2)
			l1 = l1.next;
		else
			l2 = l2.next;
    }
    return head.next;
};

let node = new ListNode(1);
node.next = new ListNode(2);
node.next.next = new ListNode(4);

let node2 = new ListNode(1);
node2.next = new ListNode(3);
node2.next.next = new ListNode(4);

console.log(mergeTwoLists(node, node2));